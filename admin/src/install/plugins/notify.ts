// 注册全局通知处理
import { useNotify } from '@/hooks/useNotify'
import { useMessage } from '@/hooks/useMessage'
import type { App } from 'vue'
import { initNotify } from '@/utils/websocket/util'

const { addMessage } = useMessage()

export default {
    init: (app: App<Element>) => {
        initNotify()

        useNotify((data) => {
            if (data.sendUserId === 'system' && data.msg === 'pong') {
                addMessage({
                    title: 'PONG',
                    content: 'return ping',
                    handler: () => {
                        console.log('ping', data)
                    }
                })
            }
        })
    },
    deps: ['pinia']
}
