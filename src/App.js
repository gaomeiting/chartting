
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
const AsyncLogin = Loadable({
  loader: () => import('./views/login/login'),
  loading: MyLoadingComponent
});
const routes = [
  { path: '/', component: AsyncHome, exact: true, requiresAuth: true },
  { path: '/home', component: AsyncHome, exact: true, requiresAuth: true },
  { path: '/login', component: AsyncLogin, exact: true },
  { path: '/home/:id', component: AsyncHomeDetails, exact: true, requiresAuth: true },
]
//路由拦截组件(封装一个私有路由)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
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
                            routes.map(route => {
                                if(route.requiresAuth) {
                                  return <PrivateRoute key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                                }
                                else {
                                   return <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                                }
                                })
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


export default App;