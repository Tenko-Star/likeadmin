import type { CommonWebsocketData } from '@/utils/websocket/ws'
import { parseData } from '@/utils/websocket/ws'
import { heartbeat, login } from '../../api/notify'
import { getNonDuplicateID } from '@/utils/util'

let initFlag = false
let attempt = 1

export type NotifyHandler = (data: CommonWebsocketData) => void

interface WebsocketInfo {
    connection: UniApp.SocketTask | null
    handlers: Record<string, NotifyHandler>
    clientId: string
}

const WsInfo: WebsocketInfo = {
    connection: null,
    handlers: {},
    clientId: ''
}

export const addNotifyHandler = (handler: NotifyHandler): string => {
    const key = getNonDuplicateID()
    WsInfo.handlers[key] = handler

    return key
}

export const removeNotifyHandler = (key: string) => {
    if (WsInfo.handlers.hasOwnProperty(key)) {
        delete WsInfo.handlers[key]
    }
}

export const getClientId = (): string => {
    return WsInfo.clientId
}

export const closeNotify = (code = 0, reason?: string) => {
    console.info('Disconnect notify service.')
    WsInfo.connection?.close({
        code,
        reason
    })
}

export const initNotify = async () => {
    if (initFlag) {
        return
    }
    initFlag = true

    if (attempt > 5) {
        uni.showToast({
            title: '连接通知服务失败, 请关闭小程序重试',
            icon: 'error'
        })
        return
    }

    const host = import.meta.env.VITE_NOTIFY_HOST ?? 'ws://127.0.0.1'
    const ws = await uni.connectSocket({
        url: host
    })
    WsInfo.connection = ws

    uni.onSocketOpen(() => {
        console.info('Connect notify service success.')
    })

    uni.onSocketError((e) => {
        console.warn('服务异常', e)
    })

    uni.onSocketClose(() => {
        console.warn('服务异常关闭')
        initFlag = false
        attempt++
        setTimeout(() => {
            initNotify()
        }, 5000)
    })

    uni.onSocketMessage((e) => {
        if (typeof e.data !== 'string') {
            return
        }

        attempt = 0
        const message = parseData(JSON.parse(e.data))

        if (message.data.hasOwnProperty('clientId')) {
            // WS服务返回的数据
            const wsData = message.data as any
            if (typeof wsData.clientId !== 'string') {
                ws.close({
                    code: -1,
                    reason: 'client id is incorrect'
                })
                console.warn('client id is incorrect')
                return
            }

            WsInfo.clientId = wsData.clientId

            login({
                client_id: WsInfo.clientId
            })
                .then(() => {
                    setInterval(() => {
                        heartbeat({
                            client_id: WsInfo.clientId
                        })
                    }, 45000)
                })
                .catch((e: any) => {
                    uni.showToast({
                        title: '连接通知服务失败, 请关闭小程序重试',
                        icon: 'error'
                    })
                    console.error('连接通知服务失败', e)
                })
            return
        } else {
            // 业务端返回的数据
            for (const k in WsInfo.handlers) {
                WsInfo.handlers[k](message)
            }
        }
    })
}
