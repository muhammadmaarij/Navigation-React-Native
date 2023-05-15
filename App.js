import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductsList from './src/screens/ProductsList';
import ProductDetails from './src/screens/ProductDetails';
import EmployeesList from './src/screens/EmployeesList';
import EmployeeDetail from './src/screens/EmployeeDetail';
import OrdersList from './src/screens/OrdersList';
import OrderDetail from './src/screens/OrderDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsList} />
        <Stack.Screen name="ViewProduct" component={ProductDetails} />
        <Stack.Screen name="Employees" component={EmployeesList} />
        <Stack.Screen name="ViewEmployee" component={EmployeeDetail} />
        <Stack.Screen name="Orders" component={OrdersList} />
        <Stack.Screen name="ViewOrder" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
