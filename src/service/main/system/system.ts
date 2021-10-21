import zcRequest from '@/service'
import { IDataType } from '@/service/type'

export function getPageListData(url: string, queryInfo: any) {
  return zcRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return zcRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return zcRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return zcRequest.pacth<IDataType>({
    url,
    data: editData
  })
}
