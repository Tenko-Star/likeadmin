import type { WebsocketData, UserType, SystemType } from '@/utils/websocket/types'

export type CommonWebsocketData = WebsocketData<SystemType> | WebsocketData<UserType>

export const parseData = (object: any): CommonWebsocketData => {
    if (object.hasOwnProperty('data') && object.data.hasOwnProperty('clientId')) {
        return object as any as CommonWebsocketData
    }

    if (Object.prototype.hasOwnProperty.call(object, 'sendUserId')) {
        if (object.sendUserId !== 'system' && object.sendUserId !== 'user') {
            throw {
                msg: 'Error: This object is not correct.',
                data: object
            }
        }

        return {
            messageId: object.messageId,
            sendUserId: object.sendUserId,
            code: object.code,
            msg: object.msg,
            data: typeof object.data === 'string' ? JSON.parse(object.data) : object.data
        } as any as CommonWebsocketData
    } else {
        throw {
            msg: 'Error: This object is not correct.',
            data: object
        }
    }
}
