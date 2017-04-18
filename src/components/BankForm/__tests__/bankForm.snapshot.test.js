import React from 'react';
import renderer from 'react-test-renderer';
import BankForm from '../index';

const props = {
  type: 'deposit',
  processHandler: jest.fn()
}

describe('BankForm', () => {
  it('has consistent render output', () => {
    const component = renderer.create(
      <BankForm />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
