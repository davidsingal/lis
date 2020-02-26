import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import GlobeSandbox from './tools/GlobeSandbox';
import ModelSandbox from './tools/ModelSandbox';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Row>
            <Col span={12}>
              <div>
                <h1 style={{ color: 'white', lineHeight: '64px' }}>LIS</h1>
              </div>
            </Col>
            <Col span={12}>
              <Menu
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['globe']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="globe">
                  <Link to="/">Globe</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/3d-models">3D Models</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/dem">DEM</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/">
              <GlobeSandbox />
            </Route>
            <Route path="/3d-models">
              <ModelSandbox />
            </Route>
            <Route path="/dem">
              Comming soon...
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
