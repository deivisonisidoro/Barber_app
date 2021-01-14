import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from "../pages/Preload";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";



const Stack = createStackNavigator();

export default ()=>(
  <Stack.Navigator
  initialRouteName="Preload"
  screenOptions={{
    headerShown: false,
  }}
  >
    <Stack.Screen name="Preload" component={Preload}/>
    <Stack.Screen name="SingIn" component={SingIn}/>
    <Stack.Screen name="SingUp" component={SingUp}/>
  </Stack.Navigator>
)