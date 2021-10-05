import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LocationScreen from '../LocationScreen';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

const mockFn = jest.fn();

const userInfo = {
  city: 'Chicago',
  country: 'USA',
};

const {getByTestId} = render(
  <Provider store={store}>
    <LocationScreen
      // @ts-ignore
      navigation={mockFn}
    />
  </Provider>,
);

test('form saves data', () => {
  fireEvent.changeText(getByTestId('city'), userInfo.city);
  fireEvent.changeText(getByTestId('country'), userInfo.country);
  fireEvent.press(getByTestId('next'));
});
