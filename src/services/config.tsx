import { stringify } from 'qs'

import { Api } from './Api'

const API = new Api({ baseURL: 'https://apis.thisisnabi.dev/' })

// API.instance.interceptors.response.use(
//   (response) => response.data,
//   (error) => Promise.reject(error)
// )

API.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.message) {
      // toast.error(error?.response?.data?.message)
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
