/*
 * @Author: Cicy 
 * @Date: 2018-10-30 17:48:52 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-31 11:11:29
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';
class App extends Component {
  render() {
    
    const title = "beijing"
    return (
      <div>
        我是react标题 { title }
        <Son title={title}></Son>
      </div>
    );
  }
}

class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solder: ['大头儿子', '小头爸爸', '围裙妈妈']
    }
    this.addPerson = this.addPerson.bind(this)
  }
  addPerson() {
    this.setState((preState, props) => {
      console.log(Math.random())
      return { solder: [...preState.solder, `新成员${Math.random()}`]}
    })
  }
  render() {
    const son = '儿子级别'
    return (
      <div>
        {
          this.state.solder.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
        <Button type="primary" onClick={this.addPerson}>添加新成员</Button>
        <h2>我是react二级标题 {son} {this.props.title} </h2>
      </div>
      
    )
  }
}
export default App;