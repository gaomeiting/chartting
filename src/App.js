
import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Loadable from 'react-loadable';
import './App.scss';

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
      return <div>Loading...</div>
  }
  else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
      return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('./views/home/home'),
  loading: MyLoadingComponent
});
const AsyncHomeDetails = Loadable({
  loader: () => import('./views/homeDetails/homeDetails'),
  loading: MyLoadingComponent
});
const routes = [
  { path: '/', component: AsyncHome, exact: true },
  { path: '/home', component: AsyncHome, exact: true },
  { path: '/home/:id', component: AsyncHomeDetails, exact: true },
]
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
                        {
                            routes.map(route => (
                                <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                            ))
                        }
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

/* function Home() {
  return <h2>我是home页面</h2>
}
function HomeDetails({match}) {
  return <h2>{`我是HomeDetails页面 id是${match.params.id}`}</h2>
} */



export default App;