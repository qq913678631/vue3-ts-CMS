<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { IDataType } from './type/type'
import BaseEchart from '@/base-UI/echarts/index'

const props = defineProps<{ roseData: IDataType[] }>()
const options = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '类别数据',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}
</script>
