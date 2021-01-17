import React, {useEffect, useContext} from 'react';
import BarberLogo from "../../assets/barber.svg";
import AsyncStorage from '@react-native-community/async-storage';
import { 
  Container,
  LoadingIcon 
} from './styles';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../context/UserContext';
import Api from '../../Api';
function Preload() {
  
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(()=>{
      const checkToken = async () => {
          const token = await AsyncStorage.getItem('token');
          if(token) {
              let res = await Api.checkToken(token);
              if(res.token) {

                  await AsyncStorage.setItem('token', res.token);

                  userDispatch({
                      type: 'setAvatar',
                      payload:{
                          avatar: res.data.avatar
                      }
                  });

                  navigation.reset({
                      routes:[{name:'MainTab'}]
                  });

              } else {
                  navigation.navigate('SignIn');
              }
          } else {
              navigation.navigate('SignIn');
          }
      }
      checkToken();
  }, []);
  return (
    <Container>
     <BarberLogo width="100%" height="160"/>
     <LoadingIcon size="large" color="#FFFFFF"/>
    </Container>
  );
}

export default Preload;