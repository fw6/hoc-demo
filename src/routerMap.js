import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import TabBar from './components/tabbar'

import Home from './pages/home'
import Classify from './pages/classify'
import Cart from './pages/cart'
import Account from './pages/account'

export default () => (
  <Router>
    <>
      <div>
        {/* <TabBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/classify" component={Classify} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route render={() => <h2> Oooops </h2>} />
        </Switch>
      </div>
    </>
  </Router>
)
