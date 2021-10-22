<template>
  <div class="role">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      createName="新建角色"
    >
      <template #></template>
    </page-content>
    <page-modal
      ref="PageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        :props="{ children: 'children', label: 'name' }"
        node-key="id"
        show-checkbox
        style="margin-left: 50px"
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal/index'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { menuMapMenuLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'role',
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const editCallback = (row: any) => {
      const leafKeys = menuMapMenuLeafKeys(row.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [PageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
      undefined,
      editCallback
    )
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})

    const handleCheckChange = (_: any, nodes2: any) => {
      const checkedKeys = nodes2.checkedKeys
      const halfCheckedKeys = nodes2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      elTreeRef,
      menus,
      otherInfo,
      PageModalRef,
      defaultInfo,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      handleCheckChange
    }
  }
})
</script>
