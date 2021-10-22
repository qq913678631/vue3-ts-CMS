export const contentTableConfig = {
  title: '商品分类列表',
  propList: [
    { prop: 'id', label: '分类ID', minWidth: '80' },
    { prop: 'name', label: '分类名称', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: 120, slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}
