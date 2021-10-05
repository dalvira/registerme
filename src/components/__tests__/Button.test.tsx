import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

const mockCall = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<Button label="Next" onPress={mockCall} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
