<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      createName="新建菜单"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="menu"
      :modalConfig="modalConfigRef"
      ref="PageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal/index'

import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'Menu',
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const modalConfigRef = computed(() => {
      return modalConfig
    })
    const [PageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal()
    return {
      modalConfigRef,
      contentTableConfig,
      PageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
