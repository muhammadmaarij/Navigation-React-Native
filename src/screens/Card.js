import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = ({text, image, price, designation, number}) => {
  return (
    <View style={{backgroundColor: 'lightblue'}}>
      <View
        style={{
          backgroundColor: 'black',
          width: width,
          height: 2,
          alignSelf: 'center',
          marginBottom: 20,
        }}></View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Name: {text}
            </Text>
            {designation && (
              <Text
                style={{
                  fontSize: 20,
                }}>
                Designation: {designation}
              </Text>
            )}
            {number && (
              <Text
                style={{
                  fontSize: 20,
                }}>
                Number: {number}
              </Text>
            )}
            {price && (
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 5,
                }}>
                {`$${price}`}
              </Text>
            )}
          </View>
          <Image
            source={{uri: image}}
            style={{width: 70, height: 70, marginVertical: 20, marginRight: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
{
  /* <Image source={{uri: imageUrl}} style={{width: 30, height: 30}} />
<Text>{item.name}</Text>
<Text>{item.description}</Text>
<Text>{`$${item.price}`}</Text> */
}
