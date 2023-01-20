// lib
import React from 'react';
import {View, Text} from 'react-native';

// redux
import {Provider} from 'react-redux';
import {store} from './redux/store';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const App = () => {
  // stack
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Settings" component={SettingScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
