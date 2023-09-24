import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PhoneValidationScreen from '../screens/PhoneValidationScreen';
import FinalScreen from '../screens/FinalScreen';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={PhoneValidationScreen} name="Phone" />
        <Stack.Screen component={FinalScreen} name="Final" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
