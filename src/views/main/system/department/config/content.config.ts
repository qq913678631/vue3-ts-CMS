export const contentTableConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: 120 },
    { prop: 'leader', label: '领导名称', minWidth: 60 },
    { prop: 'createAt', label: '创建时间', minWidth: 100, slotName: 'createAt' },
    { prop: 'updateAt', label: '修改时间', minWidth: 100, slotName: 'updateAt' },
    { label: '操作', minWidth: 120, slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
