<script setup lang="ts">
// import feedback from '@/utils/feedback'
import { ref } from 'vue'
import { type MessageStruct, useMessage } from '@/hooks/useMessage'

const lists = ref<MessageStruct[]>([])
const { count, showMsgBox, getMessageList, clearMessage, removeMessage } = useMessage()

watch([showMsgBox], (newVal) => {
    if (newVal) {
        openMessageBox()
    }
})

const openMessageBox = () => {
    lists.value = getMessageList()
}

const removeAll = () => {
    clearMessage()
    showMsgBox.value = false
}

const removeOne = (id: string) => {
    removeMessage(id)
    lists.value = getMessageList()
}
</script>

<template>
    <div
        class="flex items-center justify-center"
        style="width: 35px; cursor: pointer"
        @click="showMsgBox = true"
    >
        <el-badge class="badge" :value="count" :max="9" :hidden="count < 1">
            <el-icon :size="16">
                <Bell />
            </el-icon>
        </el-badge>

        <el-drawer v-model="showMsgBox" title="消息通知">
            <div class="btn-container">
                <el-button @click="removeAll" circle v-if="count > 0">
                    <el-icon><Delete /></el-icon>
                </el-button>
            </div>
            <div v-for="msg in lists" :key="msg.id" class="msg-box">
                <el-card shadow="hover">
                    <template #default>
                        <div class="content" @click="msg.handler?.()">
                            {{ msg.content }}
                        </div>
                    </template>

                    <template #header>
                        <div class="header">
                            <div class="title">{{ msg.title }}</div>
                            <div class="btn">
                                <el-button link @click="removeOne(msg.id)">
                                    <el-icon><CloseBold /></el-icon>
                                </el-button>
                            </div>
                        </div>
                    </template>
                </el-card>
            </div>
        </el-drawer>
    </div>
</template>

<style scoped lang="scss">
.badge {
    user-select: none;
    display: flex;
    align-items: center;
}

.btn-container {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
}

.msg-box {
    margin: 15px 0;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
            width: 90%;
        }

        .btn {
        }
    }

    .content {
        padding: var(--el-card-padding);
    }
}

.el-card :deep(.el-card__header) {
    padding: 10px 15px;
}

.el-card :deep(.el-card__body) {
    padding: 0;
}
</style>
