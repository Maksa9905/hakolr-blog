import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class RequestSender {
  static send = async <T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>,
    middleware?: (config?: AxiosRequestConfig<D>) => AxiosRequestConfig<D>,
  ): Promise<R> => {
    if (middleware) {
      const newConfig = middleware(config)
      const response = axios.request<T, R, D>(newConfig)
      return response
    }

    const response = await axios.request<T, R, D>({withCredentials: true, ...config})

    return response
  }
}

export default RequestSender
