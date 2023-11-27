import request from '@/utils/request'

export function getAll(params: any) {
    return request.get({ url: '/common/getAll', params })
}

export function setAll(params: any) {
    return request.post({ url: '/common/setAll', params })
}
