<template>
    <el-select
            :multiple="multiple ?? false"
            :disable="disable"
            :size="size ?? 'default'"
            filterable
            remote
            v-model="value"
            :remote-method="loadSelect"
            :placeholder="placeholder!"
    >
        <el-option
                v-for="item in lists"
                :key="item[optionKey]"
                :label="parseLabel(item)"
                :value="item[optionKey]"
        />
    </el-select>
</template>

<script setup lang="ts" name="BaseSearcher">
type KeywordType = string | number | string[] | number[]
type InjectProps = Record<string, any>
type SearchProps = InjectProps & { [key: string]: KeywordType }

interface Props {
    modelValue: KeywordType
    optionKey?: string
    keyword?: string
    multiple?: boolean
    disable?: boolean
    size?: 'small' | 'default' | 'large'
    fetchFun: (params: SearchProps) => Promise<any>
    labelParser?: (item: any) => string
    injectProps?: InjectProps
    max?: number
    placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
    optionKey: 'id',
    keyword: 'keyword',
    multiple: false,
    disable: false,
    size: 'default',
    max: 100,
    injectProps: () => ({}),
    placeholder: '请选择'
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get: () => props.modelValue,
    set: (v) => {
        emit('update:modelValue', v)
    }
})

const inject = computed(() => props.injectProps)

const lists = ref<any[]>([])

const parseLabel = (item: any) => {
    if (props.labelParser) {
        return props.labelParser(item)
    }

    return String(item)
}

const loadSelect = async (k: string) => {
    const data: SearchProps = { ...inject.value, [props.keyword]: k }
    const res = await props.fetchFun(data)
    lists.value = res.lists.slice(0, Math.min(props.max, 100))
}
</script>

<style scoped></style>
