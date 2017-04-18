import C from './constants';

export const deposit = (amount = 0, timestamp) => {
  return {
    type: C.DEPOSIT,
    payload: {
      amount: amount,
      timestamp: timestamp,
      type: 'deposit'
    }
  };
};

export const withdrawal = (amount = 0, timestamp) => {
  return {
    type: C.WITHDRAW,
    payload: {
      amount: amount,
      timestamp: timestamp,
      type: 'withdrawal'
    }
  }
}
