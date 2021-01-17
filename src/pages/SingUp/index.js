import React, { useContext, useState } from 'react';
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
import PersonIcon from "../../assets/person.svg";
import SingInput from '../../components/SingInput';
import { useNavigation } from "@react-navigation/native";
import Api from '../../Api';

function SingUp() {
  const [ nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const  {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const handleMessageButtonClick = () =>{
    navigation.reset({
      routes: [{name: "SingIn" }]
    })
  }
  const hadleSingClick = async() =>{
    if(nameField && emailField && passwordField){
      
      let res = await Api.singUp(nameField, emailField, passwordField);
      if(res.token){  
        // await AsyncStorage.setItem('token', res.token);
        // userDispatch({
        //   type: 'setAvatar',
        //   payload:{
        //     avatar: res.data.avatar
        //   }
        // });
        // navigation.reset({
        //   routes: [{name: 'MainTab'}]
        // });
        alert('deu certo')
      }else{
        alert("Error: " +res.error)
      }
    }else{
      alert('Prencha os campos');
    }
  }
  return (
    <Container>
      <BarberLogo width="100%" height="160"/>
      <InputArea>
        <SingInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={t=>setNameField(t)}
        />
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
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
        <SingMessageButtonTextBold>Faça Login</SingMessageButtonTextBold>

      </SingMessageButton>
    </Container>
  );
}

export default SingUp;