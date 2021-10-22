<template>
  <div class="page-dialog">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" destroy-on-close>
      <zc-form v-bind="modalConfig" v-model="formData"></zc-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ZcForm from '@/base-UI/form/index'
import store from '@/plugins/store'
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
    },
    pageName: {
      type: String,
      requried: true
    },
    otherInfo: {
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

    const handleConfirmClick = () => {
      dialogVisible.value = false
      const queryInfo = { ...formData.value }
      if (queryInfo['value']) delete queryInfo.value
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...queryInfo, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...queryInfo, ...props.otherInfo }
        })
      }
    }

    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>
