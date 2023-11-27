import { cloneDeep } from 'lodash'
import { getAll, setAll } from '@/api/common'
import { ElMessage } from 'element-plus'
import { type Ref, ref } from 'vue'

type SaveHandler = (needRefresh?: boolean) => void
type RefreshHandler = () => void

type ConfigResult<T extends Record<string, any>> = [Ref<T>, SaveHandler, RefreshHandler]

export function useConfig<T extends Record<string, any>>(type: string, init: T): ConfigResult<T> {
    const configs: Ref<T> = ref(cloneDeep(init)) as Ref<T>

    const save = (needRefresh = true) => {
        const data: Record<string, any> = {}
        for (const key in configs.value) {
            const realKey = type + '.' + key
            data[realKey] = configs.value[key]
        }

        setAll(data).then(() => {
            ElMessage.success({
                message: '保存成功'
            })

            if (needRefresh) {
                load()
            }
        })
    }

    const load = () => {
        getAll({ name: type }).then((data: T) => {
            for (const key in data) {
                if (data[key] != null && data[key] != undefined) {
                    configs.value[key] = data[key]
                }
            }
        })
    }

    load()

    return [configs, save, load]
}
