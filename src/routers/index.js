import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

//路由配置
import App from 'containers/index';
import Home from 'containers/home';
import About from 'containers/about';

const router = (
     <Router history={browserHistory}>
          <Route path="/" component={App}>
             <IndexRoute component={Home} />
             <Route path='about' component={About} />
          </Route>
        </Router>
)

export default router;