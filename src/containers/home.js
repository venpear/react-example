import React, {Component} from 'react';
import {Link} from 'react-router';
import { Menu } from 'antd';
class Home extends Component {
  render() {
    return (
      <div className="wp-list-wrapper">
        <Menu>
          <Menu.Item>
            <Link to='/todo'>TodoList</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/todoredux'>TodoList-redux</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Home;