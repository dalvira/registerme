import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SignInScreen from '../SignInScreen';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

const mockFn = jest.fn();

const userInfo = {
  email: 'test@test.com',
  password: 'password1',
};

const {getByTestId} = render(
  <Provider store={store}>
    <SignInScreen
      // @ts-ignore
      navigation={mockFn}
    />
  </Provider>,
);

test('form saves data', () => {
  fireEvent.changeText(getByTestId('email'), userInfo.email);
  fireEvent.changeText(getByTestId('password'), userInfo.password);
  fireEvent.press(getByTestId('sign-in'));
});
