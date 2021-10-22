import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackType = (item?: any) => void

export function usePageModal(newCallback?: CallbackType, editCallback?: CallbackType) {
  const PageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (PageModalRef.value) PageModalRef.value.dialogVisible = true
    newCallback && newCallback()

    console.log('%c█🚀🚀🚀  -> :', 'color: #3ba776', defaultInfo.value)
  }
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    if (PageModalRef.value) PageModalRef.value.dialogVisible = true
    editCallback && editCallback(row)
  }
  return [PageModalRef, defaultInfo, handleNewData, handleEditData]
}
