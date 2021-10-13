import ZCRequest from './request'
import localCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

const zcRequest = new ZCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token') ?? ''
      if (token) {
        // Bearer信使信差
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestIntercepCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseIntercepCatch: (err) => {
      return err
    }
  }
})

export default zcRequest
