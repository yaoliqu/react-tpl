import React from 'react'
import { Redirect } from 'react-router-dom'
import AsyncComponent from '../utils/asyncComponent'
const Home = AsyncComponent(() => import('../pages/Home'))
const Login = AsyncComponent(() => import('../pages/Login'))
const NotFound = AsyncComponent(() => import('../pages/404'))

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect from="/" to="/home" />,
    requiresAuth: false,
  },
  {
    path: '/login',
    component: Login,
    requiresAuth: false,
  },
  {
    path: '/home',
    component: Home,
    requiresAuth: true,
  },
  {
    path: '*',
    component: NotFound,
    requiresAuth: false,
  },
]

export default routes
