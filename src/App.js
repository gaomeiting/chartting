/*
 * @Author: Cicy 
 * @Date: 2018-10-30 17:48:52 
 * @Last Modified by: Cicy.gao
 * @Last Modified time: 2018-11-01 14:40:42
 */
/* import React, { Component } from 'react';
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


export default App; */

import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.scss';


class App extends Component {
  render() {
    return (
        <Router>
          <Route
            render={({ location }) => (
              <div className="page">
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/home" />}
                />
    
                <ul className="pageNav">
                <i className="iconfont icon-shandian"></i>
                  <NavLink to="/home">首页</NavLink>
                  <NavLink to="/home/123">详情</NavLink>
                </ul>
    
                <div className="pageContent">
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={300}
                    >
                      <Switch location={location}>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/home/:id" component={HomeDetails} />
                        
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>
            )}
          />
        </Router>
      )
  }
  
}

function NavLink(props) {
  return (
    <li>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

function Home() {
  return <h2>我是home页面</h2>
}
function HomeDetails({match}) {
  return <h2>{`我是HomeDetails页面 id是${match.params.id}`}</h2>
}



export default App;