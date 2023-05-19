import type { NotifyHandler } from '@/utils/websocket/util'
import { addNotifyHandler, removeNotifyHandler } from '@/utils/websocket/util'

export const useNotify = (handler: NotifyHandler) => {
    const key = addNotifyHandler(handler)

    return () => {
        removeNotifyHandler(key)
    }
}
