import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZCRequestInterceptors<T = AxiosResponse<any>> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntercepCatch?: (error: any) => any
  // responseInterceptor?: (config: AxiosResponse<any>) => AxiosResponse<any>
  responseInterceptor?: (config: T) => T
  responseIntercepCatch?: (error: any) => any
}

export interface ZCRequestConfig<T = AxiosResponse<any>> extends AxiosRequestConfig {
  interceptors?: ZCRequestInterceptors<T>
  showLoading?: boolean
}
