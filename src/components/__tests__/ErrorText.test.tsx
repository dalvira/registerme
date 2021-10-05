import React from 'react';
import renderer from 'react-test-renderer';
import ErrorText from '../ErrorText';

it('renders correctly', () => {
  const tree = renderer.create(<ErrorText text="Error" />).toJSON();
  expect(tree).toMatchSnapshot();
});
