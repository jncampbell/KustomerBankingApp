import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import C from '../constants';
import bankReducer from './reducers';

const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('state', store.getState());
  result = next(action);

  let {balance, recentTransactions} = store.getState();

  console.log(`
    balance: ${balance},
    recentTransactions: ${JSON.stringify(recentTransactions)},
  `);

  console.groupEnd();

  return result;
}

export default (initialState) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(bankReducer, initialState);
}
