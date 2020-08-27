/*
 * @Author: your name
 * @Date: 2020-08-26 10:20:06
 * @LastEditTime: 2020-08-26 11:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescipt-app\src\api\http.ts
 */
// , {  AxiosRequestConfig, AxiosResponse }
import axios from "axios"
import { baseURL } from '@/utils/urls'


// interface responseData {
//   code: number,
//   data: object | Array<any>
// }

const service = axios.create({
  baseURL,
  timeout: 5000
})
// const token: string = ''
service.interceptors.request.use( (config) => {
  console.log(config)
  // if ( token ) {
  //   config.headers.Authorization = `token ${token}`
  // }
  if ( config.method === 'POST' ) {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  return config
} )

service.interceptors.response.use(
  ( response ): any => {
    const { code, message } = response.data
    if(code) {
      return  response 
    } else {
      return Promise.reject(new Error(message || 'Error'))
    }
    
  },
  ( err ) => {
    console.log( err.message )
    return Promise.reject()
  }
)

export default service