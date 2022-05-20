import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter, Route } from 'react-router-dom'
import App from './App'
import 'lib-flexible'
import { Provider } from 'mobx-react'
import stores from './store'
const Main = () => {
  return (
    <Provider {...stores}>
      <HashRouter basename="/">
        <Route path={`/`} component={App}></Route>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
