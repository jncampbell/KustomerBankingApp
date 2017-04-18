import { combineReducers } from 'redux';
import C from '../constants';
import initialState from '../../initialState';

const bankReducer = (state = initialState, action) => {
  switch(action.type) {
    case C.DEPOSIT: {
      const {amount, timestamp, type} = action.payload;
      const balance = (state.balance * 10 + amount * 10) / 10;

      return Object.assign({}, state, {
        balance: balance,
        recentTransactions: [
          ...state.recentTransactions,
          {
            amount,
            timestamp,
            balance,
            type
          }
        ]
      });
    }
    
    case C.WITHDRAW: {
      const {amount, timestamp, type} = action.payload;
      const balance = (state.balance * 10 - amount * 10) / 10;

      return Object.assign({}, state, {
        balance: balance,
        recentTransactions: [
          ...state.recentTransactions,
          {
            amount,
            timestamp,
            balance,
            type
          }
        ]
      });
    }
    default:
      return state;
  }
};

export default bankReducer;
