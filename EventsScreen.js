import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,FlatList,TouchableOpacity} from 'react-native';
import { useState } from 'react';



export default function EventsScreen() {
const [events, addEvents]= useState([{Key:1,place:'malmö'},{key:2,place:'lund'}]);




  return (
    <View style={styles.EventsScreenContainer}>
        <Image source={require('./logo.png')} /> 
        <FlatList
         data={events}
         renderItem={({item}) => (
            <TouchableOpacity>
              <Text>{item.place}</Text>
            </TouchableOpacity>
       



         )}
        
        />

   
      <Text>Open up App.js to start working on your app!</Text>
      
      
      

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  EventsScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
