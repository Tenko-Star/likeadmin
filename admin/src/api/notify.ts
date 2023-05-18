import request from '@/utils/request'
import { getClientId } from '@/utils/websocket/util'

export function login(params: any) {
    return request.post({ url: '/notify/login', params })
}

export function heartbeat(params: any) {
    return request.post({ url: '/notify/link', params })
}

export function ping() {
    return request.post({
        url: '/notify/ping',
        params: {
            client_id: getClientId()
        }
    })
}
