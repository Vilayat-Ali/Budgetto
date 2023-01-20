import React from 'react';
import {View, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Hello, Home Page</Text>
      <Button
        title="Go somewhere"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
