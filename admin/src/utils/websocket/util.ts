import type { CommonWebsocketData } from '@/utils/websocket/ws'
import { parseData } from '@/utils/websocket/ws'
import { heartbeat, login } from '@/api/notify'
import { ElNotification } from 'element-plus'

let initFlag = false
let attempt = 1

export type NotifyHandler = (data: CommonWebsocketData) => void

interface WebsocketInfo {
    connection: WebSocket | null
    handlers: Record<string, NotifyHandler>
    clientId: string
}

const WsInfo: WebsocketInfo = {
    connection: null,
    handlers: {},
    clientId: ''
}

export const addNotifyHandler = (handler: NotifyHandler): string => {
    const key = crypto.randomUUID()
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

export const initNotify = () => {
    if (initFlag) {
        return
    }
    initFlag = true

    if (attempt > 5) {
        ElNotification({
            title: '连接通知服务失败',
            message: '请刷新页面重试',
            type: 'error'
        })
        return
    }

    const host = import.meta.env.VITE_NOTIFY_HOST ?? 'ws://127.0.0.1'
    const ws = new WebSocket(host)

    ws.onopen = () => {
        console.info('Connect notify service success.')
    }

    ws.onerror = (e) => {
        console.warn('服务异常', e)
    }

    ws.onclose = () => {
        console.warn('服务异常关闭')
        initFlag = false
        attempt++
        initNotify()
    }

    ws.onmessage = (e) => {
        attempt = 0
        const message = parseData(JSON.parse(e.data))

        if (message.data.hasOwnProperty('clientId')) {
            // WS服务返回的数据
            const wsData = message.data as any
            if (typeof wsData.clientId !== 'string') {
                ws.close(-1, 'client id is incorrect')
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
                .catch((e) => {
                    ElNotification({
                        title: '连接通知服务失败',
                        message: '请刷新页面重试',
                        type: 'error'
                    })
                    console.log('连接通知服务失败', e)
                })
            return
        } else {
            // 业务端返回的数据
            for (const k in WsInfo.handlers) {
                WsInfo.handlers[k](message)
            }
        }
    }
}
