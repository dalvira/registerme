import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

const mockCall = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<Link text="Sign Up" onPress={mockCall} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
