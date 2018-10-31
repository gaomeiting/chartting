/*
 * @Author: Cicy 
 * @Date: 2018-10-30 17:48:52 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-31 16:53:33
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';
import { Button } from 'antd-mobile';
@connect((state) => {
  return {num: state}
}, {
  addGun,
  removeGun,
  addGunAsync
})
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <p>现有机枪把{this.props.num}</p>
        <Button onClick={ this.props.addGun }>加机关枪</Button>
        <Button onClick={ this.props.removeGun }>减机关枪</Button>
        <Button onClick={ this.props.addGunAsync }>迟两天加机关枪</Button>
      </div>
    );
  }
}


export default App;