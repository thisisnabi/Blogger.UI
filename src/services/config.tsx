import { Api } from './Api'

const API = new Api({ baseURL: 'https://apis.thisisnabi.dev/' })

API.instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default API
