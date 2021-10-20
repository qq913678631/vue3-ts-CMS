import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackType = () => void

export function usePageModal(newCallback?: CallbackType, editCallback?: CallbackType) {
  const PageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (PageModalRef.value) PageModalRef.value.dialogVisible = true
    newCallback && newCallback()
  }
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    if (PageModalRef.value) PageModalRef.value.dialogVisible = true
    editCallback && editCallback()
  }

  return [PageModalRef, defaultInfo, handleNewData, handleEditData]
}
