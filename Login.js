import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button} from 'react-native';
import { useState } from 'react';
import Logo from './Logo';



export default function Login({route ,navigation}) {
   const [email, onAddingemail] = useState('');
  const [password, onTypingPassword] = useState('');
  
  return (
    <View style={styles.loginContainer}>
   
      <Text>Open up App.js to start working on your app!</Text>
      <Logo />
      <View>
       <Text>Login</Text>
      </View>
      <View>
        <Text> Email</Text>
        <TextInput 
          onChangeText={onAddingemail}
          value={(username) => onAddingemail(username) }
          placeholder='Email,Phone number...'/>
          <Text>Password</Text>
          <TextInput 
          onChangeText={onTypingPassword}
          value={password}
          placeholder='Password'/>
          <Button 
           title='Login' 
           onPress={() =>
           navigation.navigate(
            "EventsScreen", 
            {paramEmail : email
            
        

          })}/>
        
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
