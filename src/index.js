import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { counter, addGun, removeGun, addGunAsync } from './index.redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(counter, applyMiddleware(thunk));
function render() {
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
