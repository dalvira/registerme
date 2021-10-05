/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import {StackNavigator} from './navigator/Navigator';
import {ProgressBar} from './components';

const App = () => {
  const [navState, setNavState] = useState({
    name: 'SignInScreen',
    params: {progress: 0},
  });

  const onNavStateChange = (navState: any) => {
    setNavState(navState.routes[navState.index]);
  };

  return (
    <Provider store={store}>
      <NavigationContainer onStateChange={onNavStateChange}>
        <SafeAreaView style={styles.container}>
          <StackNavigator />
          {navState.name != 'SignInScreen' &&
          navState.name != 'RegisteredScreen' ? (
            <ProgressBar progress={navState.params.progress} />
          ) : null}
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
