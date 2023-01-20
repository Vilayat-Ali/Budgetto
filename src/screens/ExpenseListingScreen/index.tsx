// lib
import React from 'react';
import {View, Text, Button} from 'native-base';

type Props = {
  navigation: any;
};

const ExpenseListingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Hello, Home Page</Text>
      <Button onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default ExpenseListingScreen;
