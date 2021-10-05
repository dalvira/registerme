import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BasicInfoScreen from '../BasicInfoScreen';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

const mockFn = jest.fn();

const userInfo = {
  email: 'test@test.com',
  password: 'password1',
  firstName: 'John',
  lastName: 'Doe',
};

const {getByTestId} = render(
  <Provider store={store}>
    <BasicInfoScreen
      // @ts-ignore
      navigation={mockFn}
    />
  </Provider>,
);

test('form saves data', () => {
  fireEvent.changeText(getByTestId('email'), userInfo.email);
  fireEvent.changeText(getByTestId('password'), userInfo.password);
  fireEvent.changeText(getByTestId('first-name'), userInfo.firstName);
  fireEvent.changeText(getByTestId('last-name'), userInfo.lastName);
  fireEvent.press(getByTestId('next'));
});
