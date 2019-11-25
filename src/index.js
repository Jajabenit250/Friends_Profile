import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FriendApp from './containers/friendApp';
import * as serviceWorker from './serviceWorker';
import { searchPeople  } from './reducers';

const store = createStore(searchPeople);
ReactDOM.render( 
    <FriendApp store={store}/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
