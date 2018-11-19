import React, { Component } from 'react'
import Logo from '../../components/logo/logo';
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile';
import './login.scss' 
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="common-logo-wrap">
          <Logo></Logo>
        </div>
        <WingBlank>
          <InputItem
              placeholder="请输入用户名"
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
              placeholder="请输入密码"
            >密码</InputItem>
            <WhiteSpace />
            <Button type="primary">登录</Button>
        </WingBlank>
      </div>
    );
  }
}