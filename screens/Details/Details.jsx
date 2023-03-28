import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

function Details({navigation, route}) {
  const {color, alt_description, urls} = route.params.datum;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate ('Home')}>
        <Text style={styles.button}>Go back</Text>
      </TouchableOpacity>
      <Image source={{uri: `${urls.full}`}} style={{width: 300, height: 450}} />
      <Text style={styles.title}>{alt_description}</Text>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create ({
  container: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: '#eee',
    color: '#d33',
    marginTop: 25,
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
    paddingTop: 15,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ede',
    color: '#000',
    fontWeight: 500,
    paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 5,
    marginBottom: 10,
  },
});
