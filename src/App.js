import React from 'react'
import renderRoutes from './router/renderRoutes'
import routes from './router/router.js'
import { HashRouter as Router, Switch } from 'react-router-dom'
import './App.less'

class App extends React.Component {
  render() {
    const authPath = '/login'
    let token = localStorage.getItem('token') || ''
    return (
      <Router>
        <Switch>{renderRoutes(routes, token, authPath)}</Switch>
      </Router>
    )
  }
}

export default App
