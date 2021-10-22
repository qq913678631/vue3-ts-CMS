<template>
  <div class="category">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="category"
      createName="添加分类"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="category"
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
  name: 'category',
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
      PageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
