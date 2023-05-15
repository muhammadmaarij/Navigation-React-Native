import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Products');
            console.log('hellp');
          }}>
          <Text style={styles.text}>Manage Products</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Employees');
          }}>
          <Text style={styles.text}>Manage Employees</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Orders');
          }}>
          <Text style={styles.text}>Manage Orders</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightblue'
  },
  button: {
    backgroundColor: 'green',
    height: '25%',
    width: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  text: {
    color: 'white',
    fontSize: 28,
  },
});
