<template>
  <div class="user">
    <el-card class="box-card">
      <div class="user-search">
        <page-search :searchFormConfig="searchFormConfig"></page-search>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search/index'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
