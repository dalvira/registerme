import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

const mockCall = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Input placeholder="Email" value="test@test.com" onChange={mockCall} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
