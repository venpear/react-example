import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react/lib/update';
import * as todoActions from 'actions/todo';

@connect((state) => ({
  todoList: state.todo
}),(dispatch) => ({
  todoAction: bindActionCreators(todoActions,dispatch)
}))
class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = (i,checked) => {
    this.props.todoAction.update(i,checked);
  }
  renderList = () => {
    const { dataSource } = this.props;
    if (Array.isArray(dataSource) && dataSource.length) {
      return (
        <ul>
          {dataSource && dataSource.map((d,i) => (
            <li
             key={i}
             className={d.complated ? 'complated' : ''}
             onClick={() => this.handleClick(i, !d.complated)}
            >
             {d.text}
            </li>
          ))}
        </ul>
      )
    }
    return null;
  }
  render() {
    return (
      <div className="wp-todolist-wrapper">
       {this.renderList()}
      </div>
    )
  }
}
export default TodoList;