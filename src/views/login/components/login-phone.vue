<template>
  <div class="login-phone">
    <el-form
      :model="phoneLogin"
      :rules="rules"
      label-width="80px"
      ref="formRef"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneLogin.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="authCode">
        <div class="authCode-wrap">
          <el-input v-model="phoneLogin.authCode"></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { rules } from '../config/phone-config'
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const phoneLogin = reactive({
      phone: '',
      authCode: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('发送手机登录')
          store.dispatch('login/phoneLoginAction')
        }
      })
    }
    return { rules, phoneLogin, formRef, loginAction }
  }
})
</script>
