import React from 'react';
import { Menu, Layout } from 'antd';

const Menu2 = () => {

  const { Header } = Layout;

  return (
    <Header style={{ backgroundColor: "#fff", position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default Menu2;