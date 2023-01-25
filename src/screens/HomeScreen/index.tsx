// lib
import React from 'react';
import {View, Text, Button} from 'native-base';

// db
import {db} from '../../db';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => {
  const fetchData = async () => {
    const res = await db.section.getSections();
    console.log(res);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Hello, Home Page</Text>
      <Button onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;
