// https://x6016.com:5443/#/plays/tradition/10044
import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Tabs, Radio, Space} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './UserInfo.scss'

import info01 from '../static/pictures/info01.png'
import info02 from '../static/pictures/info02.png'
import info03 from '../static/pictures/info03.png'
import info04 from '../static/pictures/info04.png'
import info05 from '../static/pictures/info05.png'
import info06 from '../static/pictures/info06.png'
import info07 from '../static/pictures/info07.png'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const {TabPane} = Tabs;

function callback(key) {
  console.log(key);
}

function UserInfo(props) {
  const [tabPosition, setTabPosition] = useState('left')
  const changeTabPosition = e => {
    setTabPosition(e.target.value);
  };
  return (
    <Layout>
      <Layout>
        <Sider width={72} heigh={80} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0, width: '100%'}}
          >
            <Menu.Item key="1" style={{width: '72px', height: '80px'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info01} alt=''/><span>充值</span>
            </Menu.Item>
            <Menu.Item key="2" style={{width: '72px', height: '80px'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info02} alt=''/><span
              style={{width: '100%'}}>提款</span>
            </Menu.Item>
            <Menu.Item key="3" style={{width: '72px', height: '80px'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info03} alt=''/><span>借呗</span>
            </Menu.Item>
            <Menu.Item key="4" style={{width: '72px', height: '80px'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info04} alt=''/><span>个人</span>
            </Menu.Item>
            <Menu.Item key="5" style={{width: '72px', height: '80px'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info05} alt=''/><span>优惠</span>
            </Menu.Item>
            <Menu.Item key="6" style={{width: '72px', height: '80px', display: 'flex', flexDirection: 'column'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info06} alt=''/><span>信息</span>
            </Menu.Item>
            <Menu.Item key="7" style={{width: '72px', height: '80px', display: 'flex', flexDirection: 'column'}}>
              <img style={{width: '100%', display: 'flex', flexDirection: 'column'}} src={info07} alt=''/><span>客服</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <div style={{display: 'flex', flexDirection: "column"}}>
          <div style={{paddingRight: '51px', paddingTop: '30px'}}>
            <span style={{fontSize: '2.4em'}}>充值</span>
            <p>余额:0.00</p>
          </div>
          <Tabs style={{width: '168px',}} tabPosition='left'>

            <TabPane tab="支付宝支付" key="1">

            </TabPane>
            <TabPane tab="银联支付" key="2">

            </TabPane>
            <TabPane tab=" 虚拟币支付" key="3">

            </TabPane>
          </Tabs>
        </div>
        <div style={{width:'100%'}}>
          <Tabs  defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </Layout>
    </Layout>
  );
}

export default UserInfo;
