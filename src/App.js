/*
 * @Author: Cicy 
 * @Date: 2018-10-30 17:48:52 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-10-31 15:25:13
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { addGunAsync } from './index.redux';
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const store= this.props.store;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <p>现有机枪把{store.getState()}</p>
        <Button onClick={ () => store.dispatch(addGun()) }>加机关枪</Button>
        <Button onClick={ () => store.dispatch(removeGun()) }>减机关枪</Button>
        <Button onClick={ () => store.dispatch(addGunAsync()) }>迟两天加机关枪</Button>
      </div>
    );
  }
}


export default App;