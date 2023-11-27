<script setup lang="ts">
import {useConfig} from "@/hooks/useConfig"
import {defineEmits, shallowRef} from 'vue'
import type {FormInstance, FormRules} from "element-plus";
import Popup from "@/components/popup/index.vue";
import MaterialPicker from '@/components/material/picker.vue'

const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const [formData, save] = useConfig('config-group-key', {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
})

// 表单验证
const formRules = reactive<FormRules>({})

// 提交按钮
const handleSubmit = async () => {
  await formRef.value?.validate()
  save()
  popupRef.value?.close()
  emit('success')
}

//打开弹窗
const open = () => {
  popupRef.value?.open()
}

// 关闭回调
const handleClose = () => {
  emit('close')
}



defineExpose({
  open
})
</script>

<template>
  <div class="config-popup">
    <popup
        ref="popupRef"
        title="配置"
        :async="true"
        width="550px"
        @confirm="handleSubmit"
        @close="handleClose"
    >
      <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
        <el-form-item label="配置1" prop="team_name">
          <el-input v-model="formData.key1" clearable placeholder="" />
        </el-form-item>
        <el-form-item label="配置2" prop="slogan">
          <el-input v-model="formData.key2" clearable placeholder="" />
        </el-form-item>
        <el-form-item label="配置3" prop="avatar">
          <material-picker v-model="formData.key3" />
        </el-form-item>

      </el-form>
    </popup>
  </div>
</template>

<style scoped lang="scss">

</style>