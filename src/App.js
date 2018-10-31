/*
 * @Author: Cicy 
 * @Date: 2018-10-30 17:48:52 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-31 14:19:38
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { addGun, removeGun } from './index.redux';
class App extends Component {
  render() {
    
    return (
      <div>
        <p>现有机枪把</p>
        <Button onClick={addGun}>加机关枪</Button>
        <Button onClick={ removeGun }>减机关枪</Button>
      </div>
    );
  }
}


export default App;