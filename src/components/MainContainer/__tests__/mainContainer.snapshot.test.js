import React from 'react';
import renderer from 'react-test-renderer';
import MainContainer from '../MainContainer';

const props = {
  balance: 0,
  processDeposit: jest.fn(),
  processWithdrawal: jest.fn(),
  recentTransactions: []
}

describe('MainContainer', () => {
  it('has consistent render output', () => {
    const component = renderer.create(
      <MainContainer {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
