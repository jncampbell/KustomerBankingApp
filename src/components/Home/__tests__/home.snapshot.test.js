import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../index';

jest.mock('../../MainContainer', () => 'MainContainer');

describe('Home', () => {
  it('has consistent render output', () => {
    const component = renderer.create(
      <Home />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
