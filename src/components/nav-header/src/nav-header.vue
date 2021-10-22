<template>
  <div class="nav-header">
    <i :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="handleFoldClick"></i>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              size="small"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            ></el-avatar>
            <span>
              {{ userName }}
            </span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-circle-close" @click="logOut"
                >退出登录</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-user">用户信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-setting">系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, ref } from 'vue'
import Breadcrumb from '@/base-UI/breadcrumb/index'
import localCache from '@/utils/cache'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  components: {
    Breadcrumb
  },
  setup(_, { emit }) {
    const isFold = ref(false)

    const store = useStore()
    const router = useRouter()
    const userName = computed(() => store.state.login.userInfo.name)

    // 面包屑数据
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    // logOut退出登录
    const logOut = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('handleFoldClick', isFold.value)
    }
    return { userName, logOut, handleFoldClick, isFold, breadcrumbs }
  }
})
</script>
