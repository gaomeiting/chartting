
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
import AuthRoute from './components/authroute/authroute'
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
const AsyncRegist = Loadable({
  loader: () => import('./views/regist/regist'),
  loading: MyLoadingComponent
});
const routes = [
  { path: '/login', component: AsyncLogin, exact: true },
  { path: '/regist', component: AsyncRegist, exact: true },
  { path: '/', component: AsyncHome, exact: true },
  { path: '/home', component: AsyncHome, exact: true, requiresAuth: true },
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
  constructor(props) {
    super(props);
    this.state = {
      navBarFlag : true
    }
  }
  componentDidMount() {
   
  }
  
  render() {
    /* const FadingRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        <FadeIn>
          <Component {...props}/>
        </FadeIn>
      )}/>
    ) */
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
                { ['/home'].includes(location.pathname)? ( (
                  <ul className="pageNav">
                    <i className="iconfont icon-shandian"></i>
                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/home/123">详情</NavLink>
                  </ul>
                ) ) : null}
                
    
                <div className={['/home'].includes(location.pathname) ? 'pageContent pageTop' : 'pageContent'}>
                  
                   <TransitionGroup>
                      <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={300}
                          >
                          <AuthRoute></AuthRoute>
                      </CSSTransition>
                      <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                      > 
                      <Switch location={location}>
                        {
                            routes.map(route => {
                                return <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                                /* if(route.requiresAuth) {
                                  return <PrivateRoute key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                                }
                                else {
                                   return <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                                } */
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