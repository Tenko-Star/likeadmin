import { getToken } from '@/utils/auth'
import { initNotify } from '@/utils/websocket/util'
import type { App } from 'vue'

export default (app: App) => {
    if (getToken()) initNotify()
}
