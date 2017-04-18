import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../index';

describe('Nav', () => {
  it('has consistent render output', () => {
    const component = renderer.create(
      <Nav />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
