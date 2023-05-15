import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import Card from './Card';

const EmployeesList = ({navigation}) => {
  const employees = [
    {name: 'John Doe', designation: 'Engineer'},
    {name: 'Jane Smith', designation: 'Manager'},
    {name: 'Michael Johnson', designation: 'Developer'},
    {name: 'Emily Davis', designation: 'Designer'},
    {name: 'David Wilson', designation: 'Analyst'},
    {name: 'Sarah Thompson', designation: 'Tester'},
    {name: 'Robert Brown', designation: 'Architect'},
    {name: 'Olivia Taylor', designation: 'Project Manager'},
    {name: 'Daniel Martinez', designation: 'Consultant'},
    {name: 'Sophia Anderson', designation: 'Administrator'},
  ];

  const renderMenuItem = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('ViewEmployee', {
              designation: item.designation,
              text: item.name,
            })
          }>
          <Card text={item.name} designation={item.designation} />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={employees}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default EmployeesList;
