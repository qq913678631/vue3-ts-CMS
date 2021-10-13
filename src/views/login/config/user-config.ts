// 登录校验规则
const rules = {
  name: [
    { required: true, message: '用户名是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '用户名长度为5~12',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必填内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,12}$/,
      message: '密码长度为3~12',
      trigger: 'blur'
    }
  ]
}

export { rules }
