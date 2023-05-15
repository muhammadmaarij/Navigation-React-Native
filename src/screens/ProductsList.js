import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';

export default function ProductsList({navigation}) {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu.json',
    )
      .then(response => response.json())
      .then(data => setMenuData(data.menu))
      .catch(error => console.error(error));
  }, []);

  const renderMenuItem = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('ViewProduct', {
              description: item.description,
              text: item.title,
              price: item.price,
              image: item.image,
            })
          }>
          <Card
            text={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
