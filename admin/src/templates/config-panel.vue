<script setup lang="ts">
import {useConfig} from "@/hooks/useConfig";

const [formData, save] = useConfig('config-group-key', {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
})

const saveWithRefresh = () => {
  save()
}

const saveWithoutRefresh = () => {
  save(false)
}
</script>

<template>
  <div class="xl:flex">
    <el-card class="!border-none flex-1 xl:mr-4 mb-4" shadow="never">
      <template #header>
        <span class="font-medium">配置1</span>
      </template>
      <el-form :model="formData" label-width="80px">
        <el-form-item label="配置名称">
          <el-input v-model="formData.key1"/>
        </el-form-item>
      </el-form>

      <editor class="mb-10" v-model="formData.key2" height="500"></editor>
    </el-card>
    <el-card class="!border-none flex-1 mb-4" shadow="never">
      <template #header>
        <span class="font-medium">配置2</span>
      </template>
      <el-form :model="formData" label-width="80px">
        <el-form-item label="协议名称">
          <el-input v-model="formData.key3"/>
        </el-form-item>
      </el-form>

      <editor class="mb-10" v-model="formData.key4" height="500"></editor>
    </el-card>
  </div>
  <footer-btns v-perms="['setting.web.web_setting/setAgreement']">
    <el-button type="primary" @click="save">保存</el-button>
  </footer-btns>
</template>