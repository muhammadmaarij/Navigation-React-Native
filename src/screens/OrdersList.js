import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import Card from './Card';

const OrdersList = ({navigation}) => {
  const orders = [
    {
      orderNumber: 1,
      productName: 'Product A',
      price: 10.99,
      status: 'Done',
      date: '12 Aug 2014',
    },
    {
      orderNumber: 2,
      productName: 'Product B',
      price: 24.99,
      status: 'Pending',
      date: '17 Sep 2017',
    },
    {
      orderNumber: 3,
      productName: 'Product C',
      price: 7.99,
      status: 'Done',
      date: '2 Dec 2020',
    },
    {
      orderNumber: 4,
      productName: 'Product D',
      price: 15.99,
      status: 'Pending',
      date: '9 May 2023',
    },
    {
      orderNumber: 5,
      productName: 'Product E',
      price: 12.49,
      status: 'Done',
      date: '12 Apr 2023',
    },
    {
      orderNumber: 6,
      productName: 'Product F',
      price: 9.99,
      status: 'Pending',
      date: '13 Aug 2021',
    },
    {
      orderNumber: 7,
      productName: 'Product G',
      price: 18.99,
      status: 'Done',
      date: '23 Jun 2014',
    },
    {
      orderNumber: 8,
      productName: 'Product H',
      price: 6.99,
      status: 'Done',
      date: '31 Mar 2022',
    },
    {
      orderNumber: 9,
      productName: 'Product I',
      price: 11.99,
      status: 'Pending',
      date: '22 Dec 2014',
    },
    {
      orderNumber: 10,
      productName: 'Product J',
      price: 14.99,
      status: 'Done',
      date: '9 Aug 2023',
    },
  ];

  const renderMenuItem = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('ViewOrder', {
              number: item.orderNumber,
              text: item.productName,
              price: item.price,
              status: item.status,
              date: item.date,
            })
          }>
          <Card
            text={item.productName}
            number={item.orderNumber}
            price={item.price}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default OrdersList;
