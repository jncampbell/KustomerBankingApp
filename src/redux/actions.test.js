import {deposit, withdrawal} from './actions';
import C from './constants';

describe('deposit', () => {
  it('should create an action to add a deposit', () => {
    const expectedAction = {
      type: C.DEPOSIT,
      payload: {
        amount: 100,
        timestamp: 'Apr 17, 2017',
        type: 'deposit'
      }
    }

    expect(deposit(100, 'Apr 17, 2017')).toEqual(expectedAction);
  });
});

describe('withdrawal', () => {
  it('should create an action to make a withdrawal', () => {
    const expectedAction = {
      type: C.WITHDRAW,
      payload: {
        amount: 200,
        timestamp: 'Apr 17, 2017',
        type: 'withdrawal'
      }
    }

    expect(withdrawal(200, 'Apr 17, 2017')).toEqual(expectedAction);
  });
});
