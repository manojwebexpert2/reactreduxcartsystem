import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Start Redux work
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/reducers/index';
const store=createStore(rootReducer);

//console.log("store data",store);
// End Redux work

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
