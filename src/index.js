//react imports
import React from 'react';
import ReactDOM from 'react-dom';


import './styles/index.css';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import promise from 'redux-promise';

// react router imports


//components
import App from './components/App';


const createStoreWithMiddleware = applyMiddleware()(createStore);

//switch uses most specific route that matches, top down.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , document.getElementById('root'));
