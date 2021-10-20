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
