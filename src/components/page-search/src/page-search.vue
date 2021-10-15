<template>
  <div class="page-search">
    <zc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <el-button size="small" type="primary" icon="el-icon-refresh">重置</el-button>
        <el-button size="small" type="primary" icon="el-icon-search">搜索</el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>
