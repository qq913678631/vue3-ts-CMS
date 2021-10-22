<template>
  <div class="page-content">
    <zc-table
      :listData="listData"
      v-bind="contentTableConfig"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button
          size="medium"
          type="primary"
          icon="el-icon-refresh"
          v-if="isCreate"
          @click="handleCreateClick"
          >{{ createName }}</el-button
        >
      </template>
      <template #enable="{ row }">
        <el-button size="mini" :type="row.enable ? 'success' : 'danger'" plain>
          {{ row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #status="{ row }">
        <el-button size="mini" :type="row.status ? 'success' : 'danger'" plain>
          {{ row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="{ row }">
        {{ $filter.foramtTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filter.foramtTime(row.updateAt) }}
      </template>
      <template #handler="{ row }">
        <div class="handler-btns">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            v-if="isUpdate"
            @click="handlerEditClick(row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            v-if="isDelete"
            @click="handleDeleteClick(row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </zc-table>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed, ref, watch } from 'vue'
import { userPremission } from '@/hooks/user-permission'
import { ElMessageBox } from 'element-plus'
import ZcTable from '@/base-UI/table/index'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    createName: {
      type: String,
      default: '新建用户'
    }
  },
  components: {
    ZcTable
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    const listData = computed(() => store.getters[`system/pageListData`](props.pageName))
    const listCount = computed(() => store.getters[`system/pageListCount`](props.pageName))
    // 获取用户操作权限
    const isCreate = userPremission(props.pageName, 'create')
    const isUpdate = userPremission(props.pageName, 'update')
    const isDelete = userPremission(props.pageName, 'delete')
    const isQuery = userPremission(props.pageName, 'query')
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      if (queryInfo['value']) delete queryInfo.value
      store.dispatch('system/getPageListAction', {
        url: '/' + props.pageName + '/list',
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 获取动态插槽名称
    const otherPropSlots = props.contentTableConfig.propList.filter((item: any) => {
      if (item.slotName === 'headerHandler') return false
      if (item.slotName === 'enable') return false
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 新建操作
    const handleCreateClick = () => {
      emit('newBtnClick')
    }

    // 编辑操纵
    const handlerEditClick = (row: any) => {
      emit('editBtnClick', row)
    }

    // 删除操作
    const handleDeleteClick = (row: any) => {
      ElMessageBox.confirm('确定删除该条信息吗?', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('system/deletePageDataByIdAction', {
          url: props.pageName,
          id: row.id
        })
      })
    }

    return {
      listData,
      listCount,
      isCreate,
      isUpdate,
      isDelete,
      pageInfo,
      getPageData,
      otherPropSlots,
      handleCreateClick,
      handlerEditClick,
      handleDeleteClick
    }
  }
})
</script>
