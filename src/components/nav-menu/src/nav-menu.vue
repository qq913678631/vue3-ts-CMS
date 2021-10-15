<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/svgs/logo.svg" alt="" />
      <span class="title" v-if="!isCollapse">Vue3+TS</span>
    </div>

    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :unique-opened="true"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemCilck(subitem.url)">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, computed, ref } from 'vue'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenu = computed(() => store.state.login.userMenus)

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path
    const menu = pathMapToMenu(userMenu.value, currentPath)
    const defaultValue = ref(menu.id + '')
    const handleMenuItemCilck = (menuItem: string) => {
      router.push(menuItem ?? '/not-found')
    }
    return { userMenu, defaultValue, handleMenuItemCilck }
  }
})
</script>
