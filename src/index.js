import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import rootReducer from './reducers';

import 'styles/index.scss';

import App from 'containers/layout';
import Example from 'containers/layout/example'
import Home from 'containers/home';
import About from 'containers/about';
//todolist - state
import TodoList from 'containers/todolist';
//todolist - redux
import TodoListRedux from 'containers/todo-redux';

// DevTools专用配置
let reduxDevTools = function () {
  if( typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined') {
    return window.devToolsExtension()
  } else {
    return f => f
  }
};
const configureStore = compose(
  reduxDevTools()
)(createStore);
// const store = configureStore(rootReducer);

const store = createStore(rootReducer);

// Render the main component into the dom
export default class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path='about' component={About}/>
          <Route path='todo' component={TodoList} />
          <Route path='todoredux' component={TodoListRedux} />
          <Route path='example' component={Example} />
        </Route>
      </Router>
    </Provider>
    )
  }
}
ReactDOM.render(
  <Root/>, document.getElementById('app'));
