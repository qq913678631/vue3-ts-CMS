// 登录校验规则
const rules = {
  phone: [
    { required: true, message: '手机号是必填内容', trigger: 'blur' },
    {
      pattern: /^1\d{10}$/,
      message: '手机号长度内容不匹配',
      trigger: 'blur'
    }
  ],
  authCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ]
}

export { rules }
