import type { IsSameTo } from '@/utils/types'

interface SystemData {
    timestamp: number
    data: Record<string, any> | null
}

interface UserData {
    timestamp: number
    source: {
        id: number
        nickname: string
        avatar: number
    }
    data: Record<string, any> | null
}

export interface DataType {
    value: 'user' | 'system'
}

export interface UserType extends DataType {
    value: 'user'
}

export interface SystemType extends DataType {
    value: 'system'
}

export interface WebsocketData<T extends DataType> {
    messageId: string
    sendUserId: IsSameTo<T, UserType, 'user', 'system'>
    code: number
    msg: string
    data: IsSameTo<T, UserType, UserData, SystemData>
}
