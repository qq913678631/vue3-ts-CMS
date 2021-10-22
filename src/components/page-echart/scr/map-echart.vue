<template>
  <div class="map-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import BaseEchart from '@/base-UI/echarts/index'
import { computed, defineProps, withDefaults } from 'vue'
import { convertData } from './utils/conver-data'
import { IDataType } from './type/type'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  { title: '' }
)

const options = computed(() => {
  return {
    backgroundColor: '#100c2a',
    tooltip: {
      show: true,
      formatter: function (params: any) {
        if (params.value.length > 1) {
          return (
            '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '人&nbsp;&nbsp;'
          )
        } else {
          return (
            '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;'
          )
        }
      }
    },

    geo: {
      map: 'china',
      show: true,
      roam: false,
      label: {},
      layoutSize: '100%',
      itemStyle: {
        borderColor: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#00F6FF'
            },
            {
              offset: 1,
              color: '#53D9FF'
            }
          ],
          false
        ),
        borderWidth: 3,
        shadowColor: 'rgba(10,76,139,1)',
        shadowOffsetY: 0,
        shadowBlur: 60
      }
    },
    series: [
      {
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        //zoom:1.1,
        label: {
          show: false
        },
        itemStyle: {
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#073684' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#061E3D' // 100% 处的颜色
              }
            ]
          },
          borderColor: '#215495',
          borderWidth: 1
        },
        data: props.mapData
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          brushType: 'stroke'
        },
        showEffectOn: 'render',
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(5,80,151,0.2)'
              },
              {
                offset: 0.8,
                color: 'rgba(5,80,151,0.8)'
              },
              {
                offset: 1,
                color: 'rgba(0,108,255,0.7)'
              }
            ],
            global: false // 缺省为 false
          }
        },
        label: {
          show: true,
          color: '#fff',
          fontWeight: 'bold',
          position: 'inside',
          formatter: function (para: any) {
            return '{cnNum|' + para.data.value[2] + '}'
          },
          rich: {
            cnNum: {
              fontSize: 13,
              color: '#D4EEFF'
            }
          }
        },
        data: convertData(props.mapData),
        zlevel: 1
      }
    ]
  }
})
</script>
