// lib
import React from 'react';
import {View, Text, Button} from 'native-base';

type Props = {
  navigation: any;
};

const SetingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button onPress={() => navigation.navigate('Home')} colorScheme="success">
        Go Somewhere
      </Button>
    </View>
  );
};

export default SetingScreen;
