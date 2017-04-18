import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import C from './redux/constants';
import appReducer from './redux/store/reducers';
import baseData from './initialState';
import { Provider } from 'react-redux';
import storeFactory from './redux/store';

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store'])
  :
  baseData;

const saveStateLocally = () => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
}

const store = storeFactory(initialState);
store.subscribe(saveStateLocally);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
