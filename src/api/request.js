import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { Spin } from 'antd'
// import { authChangeAction } from '../store/actionCreator'
// import store from '../store'

import auth from '../utils/auth'

//创建axios实例
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true, // 选项表明了是否是跨域请求
})
service.interceptors.request.use(
  (config) => {
    // 请求头添加token
    if (auth.get()) {
      config.headers.Authorization = `Bearer ${auth.get()}`
    }
    const flag =
      (config.data && config.data.loading !== false) ||
      (config.params && config.params.loading !== false)
    if (flag) {
      let dom = document.createElement('div')
      dom.setAttribute('id', 'loading')
      document.body.appendChild(dom)
      ReactDOM.render(<Spin tip="加载中..." size="large" />, dom)
    }
    return config
  },
  (err) => {
    console.log('请求失败')
    return Promise.reject(err)
  }
)

//拦截响应
service.interceptors.response.use(
  (config) => {
    if (config.data && config.data.loading !== false) {
      document.body.removeChild(document.getElementById('loading'))
    }
    return config
  },
  (err) => {
    console.log('响应失败')
    return Promise.reject(err)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 1) {
      //错误处理
      res.code = res.data.code
      res.message = res.response.data.msg
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error) => {
    //网络请求错误处理
    const { status } = error.response
    switch (status) {
      case 401:
        // store.dispatch(authChangeAction(null))
        break
      default:
        break
    }
    return Promise.reject(error)
  }
)
export default service
