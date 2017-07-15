import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Example extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Header className="wp-example-header">
         <div className="title">React Demo List</div>
        </Header>
        <Layout>
          <Sider>
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">TODOLIST</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Sider>
          <Content>
           Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Example;