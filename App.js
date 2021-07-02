import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Food Items App',
          headerTintColor: 'pink',
          headerStyle: {
            backgroundColor: '#262aa6',
          },
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          title: 'Food Items List',
          headerTintColor: 'pink',
          headerStyle: {
            backgroundColor: '#262aa6',
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
