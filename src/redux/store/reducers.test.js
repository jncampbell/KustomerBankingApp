import bankReducer from './reducers';
import C from '../constants';
describe('Reducer:bankReducer', () => {
  it('returns the initialState', () => {
    expect(
      bankReducer(undefined, {})
    ).toEqual(
      {
        balance: 0,
        recentTransactions: []
      }
    );
  });

  it('should handle deposits', () => {
    expect(
      bankReducer({balance: 0, recentTransactions: []}, {
        type: C.DEPOSIT,
        payload: {
          amount: 1200,
          timestamp: 'Apr 12, 2017',
          type: 'deposit'
        }
      })
    ).toEqual({
      balance: 1200,
      recentTransactions: [{amount: 1200, balance: 1200, timestamp: 'Apr 12, 2017', type: 'deposit'}]
    });
  });

  it('should handle withdrawals', () => {
    expect(
      bankReducer({balance: 1200, recentTransactions: []}, {
        type: C.WITHDRAW,
        payload: {
          amount: 100,
          timestamp: 'Apr 12, 2017',
          type: 'withdrawal'
        }
      })
    ).toEqual({
      balance: 1100,
      recentTransactions: [{amount: 100, balance: 1100, timestamp: 'Apr 12, 2017', type: 'withdrawal'}]
    });
  });
});
