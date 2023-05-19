import { ref } from 'vue'
import { getNonDuplicateID } from '@/utils/util'

export interface MessageStruct {
    id: string
    title: string
    content?: string
    handler?: () => void
}

export interface MessageConfig {
    title: string
    content?: string
    handler?: () => void
    afterCreate?: () => void
}

const messages: Map<string, MessageStruct> = new Map()
const count = ref<number>(0)
const showMsgBox = ref<boolean>(false)

export function loadMessage(ms: MessageStruct[]) {
    ms.forEach((msg) => {
        messages.set(getNonDuplicateID(), msg)
    })
    count.value = messages.size
}

function addMessage(config: MessageConfig) {
    const id = getNonDuplicateID()
    messages.set(id, {
        id,
        title: config.title,
        content: config.content,
        handler: config.handler
    })
    count.value++

    if (config.afterCreate) {
        config.afterCreate()
    }

    return id
}

function removeMessage(id: string) {
    if (messages.has(id)) {
        messages.delete(id)
        count.value--
    }
}

function getMessageList(): MessageStruct[] {
    const result: MessageStruct[] = []
    let c = 0
    for (const msg of messages.values()) {
        if (c > 98) {
            break
        }

        result.push(msg)
        c++
    }

    return result
}

function clearMessage() {
    count.value = 0
    messages.clear()
}

export function useMessage() {
    return { count, showMsgBox, addMessage, removeMessage, getMessageList, clearMessage }
}
