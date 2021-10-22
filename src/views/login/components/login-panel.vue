<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="user">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        <login-user ref="userRef"></login-user>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="login-control">
      <el-checkbox v-model="isKeePassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="login-btn">
      <el-button type="primary" @click="handleLoginCilck">立即登录</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import LoginUser from './login-user.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    LoginUser,
    LoginPhone
  },
  setup() {
    const currentTab = ref<string>('user')
    const isKeePassword = ref(true)
    const userRef = ref<InstanceType<typeof LoginUser>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const handleLoginCilck = () => {
      if (currentTab.value === 'user') {
        userRef.value?.loginAction(isKeePassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }
    return {
      currentTab,
      isKeePassword,
      userRef,
      phoneRef,
      handleLoginCilck
    }
  }
})
</script>
