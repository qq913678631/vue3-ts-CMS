<template>
  <div class="login">
    <login-panel />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>
