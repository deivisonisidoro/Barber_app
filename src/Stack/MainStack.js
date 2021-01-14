import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from "../Pages/Preload";
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";



const Stack = createStackNavigator();

export default ()=>(
  <Stack.Navigator>
    <Stack.Screen name="Preload" component={Preload}/>
    <Stack.Screen name="SingIn" component={SingIn}/>
    <Stack.Screen name="SingUp" component={SingUp}/>
  </Stack.Navigator>
)