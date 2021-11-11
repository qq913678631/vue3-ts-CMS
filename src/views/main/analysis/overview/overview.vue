<template>
  <div class="overview">
    <h2>技术栈：vue3 + Ts + echarts</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'overview',
  setup() {
    return {}
  }
})
</script>

<style>
.overview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #fff;
}
</style>
