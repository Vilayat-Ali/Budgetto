import React from 'react';
import {View, Text, Button} from 'native-base';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Hello, Home Page</Text>
      <Button onPress={() => navigation.navigate('Settings')}>
        Go somewhere
      </Button>
    </View>
  );
};

export default HomeScreen;
