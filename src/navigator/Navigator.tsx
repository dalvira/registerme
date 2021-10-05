import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import BasicInfoScreen from '../screens/BasicInfoScreen';
import LocationScreen from '../screens/LocationScreen';
import SubmitScreen from '../screens/SubmitScreen';
import RegisteredScreen from '../screens/RegisteredScreen';

export type ParamList = {
  SignInScreen: {progress?: number};
  BasicInfoScreen: {progress?: number};
  LocationScreen: {progress?: number};
  SubmitScreen: {progress?: number};
  RegisteredScreen: undefined;
};

const RegisterStack = createNativeStackNavigator<ParamList>();
export const StackNavigator = () => {
  return (
    <RegisterStack.Navigator initialRouteName="SignInScreen">
      <RegisterStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{title: 'Sign In'}}
        initialParams={{progress: 0}}
      />
      <RegisterStack.Screen
        name="BasicInfoScreen"
        component={BasicInfoScreen}
        options={{title: 'Basic Info'}}
        initialParams={{progress: 0.33}}
      />
      <RegisterStack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{title: 'Location'}}
        initialParams={{progress: 0.66}}
      />
      <RegisterStack.Screen
        name="SubmitScreen"
        component={SubmitScreen}
        options={{title: 'Submit'}}
        initialParams={{progress: 1}}
      />
      <RegisterStack.Screen
        name="RegisteredScreen"
        component={RegisteredScreen}
        options={{title: 'Welcome'}}
      />
    </RegisterStack.Navigator>
  );
};
