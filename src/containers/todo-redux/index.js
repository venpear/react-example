import React, { Component } from 'react';
import * as todoActions from 'actions/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Button } from 'antd';
import TodoList from 'components/todolist';

function mapStateToProps(state) {
  return {
    todoList: state.todo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    todoAction: bindActionCreators(todoActions, dispatch)
  }
}

class TodoRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All'
    }
  }
  pressEndter = (e) => {
    this.props.todoAction.add(e.target.value);
  }
  handleAll = () => {
    this.setState({filter: 'All'});
  }
  handleFinsh = () => {
    this.setState({filter: 'Fish'});    
  }
  handleNoFinsh = () => {
    this.setState({filter: 'noFish'});    
  }

  filterDataSource = () => {
    const { filter } = this.state;
    const { todoList } = this.props;
    switch(filter) {
      case 'All':
       return todoList;
      case 'Fish':
       return todoList.filter(d => d.complated);
      case 'noFish':
       return todoList.filter(d => !d.complated);
    }
  }

  render() {
    const todoList = this.filterDataSource();
    return (
      <div className="wp-todoredux-wrapper">
        <Input 
          onPressEnter={this.pressEndter}
        />
        <TodoList dataSource={todoList} />
        <div className="option">
          <Button onClick={this.handleAll}>全部</Button>
          <Button onClick={this.handleFinsh}>已完成</Button>
          <Button onClick={this.handleNoFinsh}>未完成</Button>
        </div>
      </div>
    )
  }
}
export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoRedux);