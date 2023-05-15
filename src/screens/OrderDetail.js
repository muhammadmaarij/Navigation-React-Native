import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OrderDetail({route, navigation}) {
  const {text, number, price, status, date} = route.params;
  return (
    <View style={{flex:1,backgroundColor: 'lightblue'}}>
      <Text
        style={{fontSize: 40, color: 'green', margin: 15, alignSelf: 'center'}}>
        Order Details
      </Text>
      <Text style={styles.text}>Name: {text}</Text>
      <Text style={styles.text}>Number: {number}</Text>
      <Text style={styles.text}>Price: {price}</Text>
      <Text style={styles.text}>Status: {status}</Text>
      <Text style={styles.text}>Date: {date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'green',
    marginBottom: 15,
  },
});
