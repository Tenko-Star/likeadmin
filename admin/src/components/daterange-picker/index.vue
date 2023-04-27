<template>
    <el-date-picker
        v-model="content"
        :type="dateRange ?? 'datetimerange'"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :value-format="valueFormat ?? 'YYYY-MM-DD HH:mm:ss'"
        clearable
    ></el-date-picker>
</template>

<script lang="ts" setup>
import { withDefaults, computed } from 'vue'

/* Props S */
const props = withDefaults(
    defineProps<{
        startTime?: string
        endTime?: string
        valueFormat?: string
        dateRange?: 'datetimerange' | 'daterange'
    }>(),
    {
        startTime: '',
        endTime: '',
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        dateRange: 'datetimerange'
    }
)
const emit = defineEmits(['update:startTime', 'update:endTime'])

const content = computed<any>({
    get: () => {
        return [props.startTime, props.endTime]
    },
    set: (value: Event | any) => {
        if (value === null) {
            emit('update:startTime', '')
            emit('update:endTime', '')
        } else {
            emit('update:startTime', value[0])
            emit('update:endTime', value[1])
        }
    }
})
</script>
