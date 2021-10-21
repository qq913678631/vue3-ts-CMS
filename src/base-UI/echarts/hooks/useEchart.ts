import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

export default function (eL: HTMLElement, theme?: string, type?: any) {
  const echartInstance = echarts.init(eL, theme ?? 'light', type ?? {})

  const setOptions = (option: EChartsOption) => {
    echartInstance.setOption(option)
  }

  const updataResize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    // 浏览器发生变化的时候，echart图跟着变化
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updataResize
  }
}
