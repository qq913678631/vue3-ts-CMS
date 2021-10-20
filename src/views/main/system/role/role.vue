<template>
  <div class="role">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
    <page-content :contentTableConfig="contentTableConfig" pageName="role">
      <template #></template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  name: 'role',
  setup() {
    return { searchFormConfig, contentTableConfig }
  }
})
</script>
