import { stringify } from 'qs'
import { toast } from 'react-toastify'

import { Api } from './ApiGlobals'

const API = new Api({ baseURL: 'https://apis.thisisnabi.dev/' })

API.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.message) {
      toast.error(error?.response?.data?.message)
    }

    return Promise.reject(error)
  }
)

API.instance.defaults.paramsSerializer = function (params) {
  return stringify(params, {
    allowDots: true,
  })
}

export default API
