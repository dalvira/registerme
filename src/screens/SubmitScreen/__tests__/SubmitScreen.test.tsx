import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SubmitScreen from '../SubmitScreen';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

const mockFn = jest.fn();

const userInfo = {
  dateOfBirth: '10041985',
  mobile: '18085551234',
};

const {getByTestId} = render(
  <Provider store={store}>
    <SubmitScreen
      // @ts-ignore
      navigation={mockFn}
    />
  </Provider>,
);

test('form saves data', () => {
  fireEvent.changeText(getByTestId('dateOfBirth'), userInfo.dateOfBirth);
  fireEvent.changeText(getByTestId('mobile'), userInfo.mobile);
  fireEvent.press(getByTestId('submit'));
});
