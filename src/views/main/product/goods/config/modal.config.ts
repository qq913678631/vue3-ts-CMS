export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '部门编号',
      placeholder: '请输入部门编号'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称',
      isHidden: false
    }
  ],
  colLayout: { span: 24 }
}
