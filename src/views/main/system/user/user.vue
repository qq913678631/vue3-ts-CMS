<template>
  <div class="user">
    <el-card class="box-card">
      <div class="search">
        <page-search
          :searchFormConfig="searchFormConfig"
          @resetBtnClick="handleResetClick"
          @queryBtnClick="handleQueryClick"
        ></page-search>
      </div>
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="users"
        ref="pageContentRef"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></page-content>
      <page-modal
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfigRef"
        pageName="users"
        ref="PageModalRef"
      ></page-modal>
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal/index'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { userPageSearch } from '@/hooks/user-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const modalConfigRef = computed(() => {
      // 动态添加部门和角色列表
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item: any) => {
        return { label: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })
    const [pageContentRef, handleResetClick, handleQueryClick] = userPageSearch()

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }

    const [PageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
      newCallback,
      editCallback
    )

    return {
      modalConfigRef,
      PageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      defaultInfo,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData,
      newCallback,
      editCallback
    }
  }
})
</script>

<style scoped></style>
