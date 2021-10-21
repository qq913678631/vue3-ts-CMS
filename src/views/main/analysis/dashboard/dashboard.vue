<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <zc-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </zc-card>
      </el-col>
      <el-col :span="10">
        <zc-card title="不同城市商品销量">
          <!-- <pie-echart :option="option"></pie-echart> -->
        </zc-card>
      </el-col>
      <el-col :span="7">
        <zc-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsFavor"></rose-echart>
        </zc-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="12">
        <zc-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </zc-card>
      </el-col>
      <el-col :span="12">
        <zc-card title="分类商品的收藏">
          <!-- <pie-echart :option="option"></pie-echart> -->
        </zc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import ZcCard from '@/base-UI/card/index'
import { PieEchart, RoseEchart, LineEchart } from '@/components/page-echart/index'

export default defineComponent({
  name: 'dashboard',
  components: {
    ZcCard,
    PieEchart,
    RoseEchart,
    LineEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const title = '分类商品销售'
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { title, xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      return store.state.dashboard.categoryGoodsFavor.map((item: any) => {
        return { name: item.name, value: item.goodsFavor }
      })
    })
    return { categoryGoodsCount, categoryGoodsSale, categoryGoodsFavor }
  }
})
</script>

<style scoped lang="scss">
.dashboard {
  .box-card {
    background-color: #100c2a;
    color: #fff;
  }
}
</style>
