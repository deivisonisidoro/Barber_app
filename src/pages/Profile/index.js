import React from 'react';
import { Text, Button } from 'react-native';
import Api from '../../Api';
import { Container } from './styles';
import {useNavigation} from "@react-navigation/native"
function Profile() {
  const navigation = useNavigation();
  const handleLogoutClick = async () =>{
    await Api.logout();
    navigation.reset({
      routes:[{name: 'SingIn'}]
    });
  }
  return (
    <Container>
      <Text>Profile</Text>
      <Button title='Sair' onPress={handleLogoutClick}>Sair</Button>
    </Container>
  );
}

export default Profile;