import React, { Component } from 'react';
import * as todoActions from 'actions/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Button } from 'antd';

function mapStateToProps(state) {
  return {
    textList: state.todo
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
  }
  pressEndter = (e) => {
    console.log(e.target.value);
    this.props.todoAction.add(e.target.value);
  }
  handleAdd = () => {
    console.log(this.props.textList)
  }
  render() {
    return (
      <div className="sr-todoredux-wrapper">
        <Input 
          onPressEnter={this.pressEndter}
        />
        <Button onClick={this.handleAdd}>添加</Button>
        <Button>删除</Button>
      </div>
    )
  }
}
export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoRedux);