// lib
import React from 'react';
import {NativeBaseProvider} from 'native-base';

// redux
import {Provider} from 'react-redux';
import {store} from './redux/store';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import HomeScreen from './screens/HomeScreen';
import SectionListingScreen from './screens/SectionListingScreen';
import ExpenseListingScreen from './screens/ExpenseListingScreen';
import SettingScreen from './screens/SettingScreen';

const App = () => {
  // stack
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Expenses" component={ExpenseListingScreen} />
            <Screen name="Saved Sections" component={SectionListingScreen} />
            <Screen name="Settings" component={SettingScreen} />
          </Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
