<template>
  <div class="page-search">
    <zc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <el-button size="small" type="primary" icon="el-icon-refresh" @click="handleResetClick"
          >重置</el-button
        >
        <el-button size="small" type="primary" icon="el-icon-search" @click="handleQueryClick"
          >搜索</el-button
        >
      </template>
    </zc-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZcForm from '@/base-UI/form/index'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    ZcForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该由配置文件的field来决定

    // 1.优化一：formData中的属性应该动态来觉得
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二：当用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>
