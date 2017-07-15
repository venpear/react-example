import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

//路由配置
import App from 'containers/index';
import Home from 'containers/home';
import About from 'containers/about';
import TodoList from 'containers/todolist/index';

const Root = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About}/>
      <Route path="todo" component={TodoList}/>
    </Route>
  </Router>
)

export default Root;