import axios, { AxiosInstance } from 'axios'
import { ZCRequestInterceptors, ZCRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const DEFAULT_SHOW_LOADING = true

class ZCRequest {
  instance: AxiosInstance
  interceptors?: ZCRequestInterceptors
  showLoading?: boolean
  loading?: ILoadingInstance

  // 有多个不同的baseURL的时候， 创建不同的实例
  constructor(config: ZCRequestConfig) {
    // 1.创建 axios 实例
    this.instance = axios.create(config)

    // 2.保存请求基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING

    // 3.使用拦截器
    // 从config中取出的拦截器对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntercepCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseIntercepCatch
    )

    // 添加在所有实例上的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载...',
            background: 'rgba(0, 0, 0, .5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()
        return res.data
      },
      (err) => {
        // 将loading移除
        this.loading?.close()
        // 判断err.response.status返回的错误状态码 做出相应的操作
        return err
      }
    )
  }

  request<T>(config: ZCRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }

      // 2.判断 传入的参数是否 显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<T, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 不影响下一个请求
          this.showLoading = DEFAULT_SHOW_LOADING

          // 将请求结果返回
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_SHOW_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: ZCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: ZCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T>(config: ZCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  pacth<T>(config: ZCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ZCRequest
