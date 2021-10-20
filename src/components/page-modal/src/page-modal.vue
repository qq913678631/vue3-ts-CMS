<template>
  <div class="page-dialog">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" destroy-on-close>
      <zc-form v-bind="modalConfig" v-model="formData"></zc-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ZcForm from '@/base-UI/form/index'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      requried: true,
      default: () => ({})
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ZcForm
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    return { dialogVisible, formData }
  }
})
</script>
