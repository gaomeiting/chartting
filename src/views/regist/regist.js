import React, { Component } from 'react'
import Logo from '../../components/logo/logo';
import { List, WingBlank, WhiteSpace, InputItem, Button, Radio } from 'antd-mobile';
import './regist.scss' 
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  
  onChange = (value) => {
    this.setState({
      value
    });
  };
  render() {
    const RadioItem = Radio.RadioItem;
    const data = [
      { value: 'genius', label: '牛人' },
      { value: 'boss', label: 'BOSS' },
    ];
    const { value } = this.state;
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
            <InputItem
              placeholder="请确认密码"
            >确认密码</InputItem>
            <WhiteSpace />
            <List>
              {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                  {i.label}
                </RadioItem>
              ))}
            </List>
            <WhiteSpace />
            <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}