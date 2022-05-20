import React from 'react'
import { Button } from 'antd'
import { Badge } from 'antd-mobile'
// import { login } from '@/api/api'
import { observer, inject } from 'mobx-react'

//类组件
// import {
//   inject,
//   observer
// } from 'mobx-react'
// @inject ('store') @observer

const Login = ({ appStore }) => {
  // console.log('🚀 ~ file: index.js ~ line 12 ~ Login ~ props', appStore)
  // login()
  return (
    <div>
      <Button type="primary">Button</Button>
      <Badge content="5">sss</Badge>
    </div>
  )
}

export default inject('appStore')(observer(Login))
