import React, {Component} from 'react';
import update from 'react/lib/update';
import {Button, Input} from 'antd';
import TodoItem from './todoitem';
import Filter from './filter';
import './styles.scss';

let index = 0;
let input = '';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filter: 'all'
    }
  }
  handlePressEnder = (e) => {
    console.log('input', input.value);
    const { list } = this.state;
    this.setState({
      list: [
        ...list, {
          index,
          name: e.target.value,
          completed: false
        }
      ]
    },() => {
      index++;
    });
  }
  filterList = () => {
    const {filter, list} = this.state;
    const filterList = [];
    switch (filter) {
      case 'all':
        return list;
      case 'completed':
        return list.filter(d => d.completed);
      case 'active':
        return list.filter(d => !d.completed);
      default:
        return [];
    }
  }
  handleChange = (idx,completed) => {
    this.setState(update(this.state,{
      list: {
        [idx]: {$merge: {
          completed 
        }}
      }
    }));
  }
  render() {
    const list = this.filterList();
    console.log('list', list);
    return (
      <div className="wp-todolist">
        <Input
          type="text"
          ref={node => {
          input = node
        }}
          onPressEnter={this.handlePressEnder}/>
        <div className="wp-todolist-list">
          <ul>
            {list.length ? 
              list.map((d, i) => (
                <TodoItem 
                  key={d.index} 
                  idx={d.index} 
                  completed={d.completed} 
                  name={d.name}
                  onChange={this.handleChange}
                />)) 
              : null
            }
          </ul>
        </div>
        <Filter
          onAll={() => {
          this.setState({filter: 'all'})
        }}
          onCompleted={() => {
          this.setState({filter: 'completed'})
        }}
          onActive={() => {
          this.setState({filter: 'active'})
        }}/>
      </div>
    )
  }
}

export default TodoList;