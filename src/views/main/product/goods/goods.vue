<template>
  <div class="goods">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      createName="添加商品"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #image="{ row }">
        <el-image
          style="width: 100px; height: 100px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="{ row }">{{ '￥' + row.oldPrice }}</template>
      <template #newPrice="{ row }">{{ '￥' + row.newPrice }}</template>
    </page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="department"
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
  name: 'goods',
  components: { PageContent, PageModal },
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
