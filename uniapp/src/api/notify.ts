import request from '@/utils/request'
import { getClientId } from '@/utils/websocket/util'

export function login(data: any) {
    return request.post({ url: '/notify/login', data })
}

export function heartbeat(data: any) {
    return request.post({ url: '/notify/link', data })
}

export function ping() {
    return request.post({
        url: '/notify/ping',
        data: {
            client_id: getClientId()
        }
    })
}
