<template>
  <div id="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu ref="navMenuRef" :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header width="200px" class="page-header">
          <nav-header @handleFoldClick="foldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const foldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return { isCollapse, foldChange }
  }
})
</script>
