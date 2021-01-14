import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Stack/MainStack';
import UserContextProvider from './src/context/UserContext';


export default function App() {
  return (
  <UserContextProvider>
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  </UserContextProvider>
  
  );
}