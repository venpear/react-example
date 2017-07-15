import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class Example extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Header></Header>
        <Layout>
          <Sider>
           Slider
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