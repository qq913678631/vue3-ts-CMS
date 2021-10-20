<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
