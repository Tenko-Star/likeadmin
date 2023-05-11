<template>
    <el-select
        :multiple="multiple ?? false"
        :disable="disable"
        :size="size ?? 'default'"
        filterable
        :remote="searchable ?? true"
        :clearable="clearable ?? true"
        v-model="value"
        :remote-method="loadSelect"
        :placeholder="placeholder!"
        class="w-[280px]"
        @clear="handleClear"
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
import { watch, computed, ref, onMounted } from 'vue'

type KeywordType = string | number | string[] | number[]
type InjectProps = Record<string, any>
type SearchProps = InjectProps & { [key: string]: KeywordType }
type Constructor = (new (...args: any[]) => any) & ((...args: any[]) => any)

interface Props {
    modelValue: KeywordType
    optionKey?: string
    optionType?: Constructor
    keyword?: string
    multiple?: boolean
    disable?: boolean
    size?: 'small' | 'default' | 'large'
    fetchFun: (params: SearchProps) => Promise<any>
    labelParser?: (item: any) => string
    injectProps?: InjectProps
    max?: number
    placeholder?: string
    preSearch?: boolean
    clearable?: boolean
    emptyValue?: any
    searchable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    optionKey: 'id',
    optionType: Number,
    keyword: 'keyword',
    multiple: false,
    disable: false,
    size: 'default',
    max: 100,
    injectProps: () => ({}),
    placeholder: '请选择',
    preSearch: true,
    clearable: true,
    emptyValue: null,
    searchable: true
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

    res.lists.forEach((item: any) => {
        item[props.optionKey] = props.optionType
            ? props.optionType(item[props.optionKey])
            : item[props.optionKey]
    })
    lists.value = res.lists.slice(0, Math.min(props.max, 100))
}

const preSelect = async () => {
    let data: SearchProps

    if (props.searchable) {
        data = { ...inject.value, [props.optionKey]: props.modelValue }
    } else {
        data = { ...inject.value }
    }

    const res = await props.fetchFun(data)

    res.lists.forEach((item: any) => {
        item[props.optionKey] = props.optionType
            ? props.optionType(item[props.optionKey])
            : item[props.optionKey]
    })
    lists.value = res.lists.slice(0, Math.min(props.max, 100))
}

const handleClear = () => {
    value.value = props.emptyValue
}

watch([value], () => {
    if (props.preSearch) {
        preSelect()
    }
})

onMounted(() => {
    if (!props.searchable) {
        preSelect()
    }
})
</script>

<style scoped></style>
