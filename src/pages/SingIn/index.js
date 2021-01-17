import React, { useState, useContext } from 'react';
import  { UserContext} from '../../context/UserContext';
import { 
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SingMessageButton,
  SingMessageButtonText,
  SingMessageButtonTextBold,
} from './styles';

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import SingInput from '../../components/SingInput';
import { useNavigation } from "@react-navigation/native";
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage'


function SingIn() {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const  {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const handleMessageButtonClick = () =>{
    navigation.reset({
      routes: [{name: "SingUp" }]
    })
  }
  const hadleSingClick = async () =>{
    if(emailField && passwordField){
      let json = await Api.signIn(emailField, passwordField);
      if(json.token){
        await AsyncStorage.setItem('token', json.token);
          userDispatch({
              type: 'setAvatar',
              payload:{
                  avatar: json.data.avatar
              }
          });

          navigation.reset({
              routes:[{name:'MainTab'}]
          });
      }else{
        alert('E-mail ou senha errados!')
      }
    }else{
      alert("Prencha os campos!")
    }
  }
  return (
    <Container>
      <BarberLogo width="100%" height="160"/>
      <InputArea>
        <SingInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t=>setEmailField(t)}
        />
        <SingInput 
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)} 
          password={true}
        />

        <CustomButton onPress={hadleSingClick} >
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
        <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>

      </SingMessageButton>
    </Container>
  );
}

export default SingIn;