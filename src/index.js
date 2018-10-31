import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import M from 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase'
import {config} from './firebase.config'

firebase.initializeApp(config)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

// If you want your app t work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
