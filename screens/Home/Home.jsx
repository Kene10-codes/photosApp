import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ACCESS_KEY, API_URL} from '../../constants';

export default function Home({navigation}) {
  const [data, setData] = useState ([]);
  const [loading, setLoading] = useState (true);

  const desc = data.map (datum => (
    <View style={styles.container} key={datum.id}>
      <Image
        source={{uri: `${datum.urls.full}`}}
        style={{width: 300, height: 200}}
      />
      <Text style={styles.author}>Author: {datum.user.name}</Text>
      {datum.current_user_collections.map (desc => <Text>{desc.id}</Text>)}
    </View>
  ));

  useEffect (() => {
    fetch (API_URL, {
      method: 'GET',
      headers: new Headers ({
        Authorization: `Client-ID ${ACCESS_KEY}`,
        'Content-Type': 'application/json',
      }),
    })
      .then (response => response.json ())
      .then (data => setData (data))
      .catch (error => console.error (error))
      .finally (() => setLoading (false));
  }, []);
  return (
    <View style={styles.container}>
      {loading ? <Text>Loading...</Text> : <Text>{desc}</Text>}
    </View>
  );
}

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
  row: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
