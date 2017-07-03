import React, { Component } from 'react';
import {Button} from 'antd';

class Filter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { onAll, onCompleted, onActive } = this.props;
    return (
      <div className="wp-todolist-options">
        <Button onClick={onAll}>全部</Button>
        <Button onClick={onCompleted}>已完成</Button>
        <Button onClick={onActive}>待完成</Button>
      </div>
    )
  }
}
export default Filter;