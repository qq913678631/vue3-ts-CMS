<template>
  <div class="login-user">
    <el-form :model="userLogin" ref="formRef" :rules="rules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="userLogin.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userLogin.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/user-config'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const userLogin = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    // 账号密码登录
    const loginAction = (isKeePassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeePassword) {
            localCache.setCache('name', userLogin.name)
            localCache.setCache('password', userLogin.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始进行登录验证
          store.dispatch('login/userLoginAction', { ...userLogin })
        }
      })
    }

    return {
      rules,
      userLogin,
      formRef,
      loginAction
    }
  }
})
</script>
