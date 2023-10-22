import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import Logo from './Logo';



export default function Login({ route, navigation }) {
  const [name, onAddingName] = useState('');
  const [email, onAddingemail] = useState('');
  const [password, onTypingPassword] = useState('');

  function passwordCheck(password, name) {

    if (password == '123' && name == 'Mohamad') {
      navigation.navigate(
        "EventsScreen",
        { paramEmail: name })
    }
    else {
      Alert.alert('Invalid username or password')
    }
  };



  return (
    <View style={styles.loginContainer}>

      <Text style={styles.login}>We find the place and you do the dance</Text>
      <Logo />
      <View>
        <Text style={styles.login}>Login Information</Text>
      </View>
      <View width='90%'>
        {<Text> Name</Text>}
        <TextInput
          style={styles.inputContainer}
          onChangeText={onAddingName}
          value={name}
          placeholder='User Name' />
        <Text> Email</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={onAddingemail}
          value={email}
          placeholder='Email,Phone number...' />
        <Text>Password</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={onTypingPassword}
          value={password}
          placeholder='Password' />
        <Button
          title='Login'
          onPress={() => { passwordCheck(password, name); }



          } />

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#E4DDDE',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    borderWidth: 0.25,
    borderRadius: 5,
    fontSize: 20

  },
  login: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#8B6C70',
    fontWeight: 'bold'
  },
});
