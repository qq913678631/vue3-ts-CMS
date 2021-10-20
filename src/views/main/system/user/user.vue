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
        :modalConfig="modalConfig"
        ref="PageModalRef"
      ></page-modal>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
