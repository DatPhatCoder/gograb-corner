
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/CreateAccountPage.tsx'; 
import MainScreen from '../screens/MainPage'; 

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        {/* other screens can be added here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
