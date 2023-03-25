import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Details({navigation, route}) {
  console.log (route.params);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default Details;
