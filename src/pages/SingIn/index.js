import React, { useState } from 'react';

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


function SingUp() {
  const [emailField, setEmailField] = useState('deivison');
  const [passwordField, setPasswordField] = useState('');
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

        <CustomButton>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SingMessageButton>
        <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
        <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>

      </SingMessageButton>
    </Container>
  );
}

export default SingUp;