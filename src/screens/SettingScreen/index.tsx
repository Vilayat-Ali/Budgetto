import React from 'react';
import {View, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

const SetingScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go somewhere"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SetingScreen;
