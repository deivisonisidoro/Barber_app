import React, {useEffect} from 'react';
import BarberLogo from "../../assets/barber.svg";
import AsyncStorage from '@react-native-community/async-storage';
import { 
  Container,
  LoadingIcon 
} from './styles';
import { useNavigation } from '@react-navigation/native';

function Preload() {
  const navigation = useNavigation();

  useEffect(()=>{
    const checkToken = async () =>{
      const token = await AsyncStorage.getItem("token");
      if(token){

      }else{
        navigation.navigate('SingIn');      
      }
    }
    checkToken();
  },[])

  return (
    <Container>
     <BarberLogo width="100%" height="160"/>
     <LoadingIcon size="large" color="#FFFFFF"/>
    </Container>
  );
}

export default Preload;