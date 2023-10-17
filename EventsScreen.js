import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,FlatList,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Logo from './Logo';
import Login from './Login';




export default function EventsScreen({navigation, prop,route}) {
const [events, addEvents]= useState([
    {Key:1,place:'malmö',Time:'15:00',photo:'./Malmö.png'},
    {key:2,place:'lund',Time:'16:00',photo:'./Malmö.png'},
    {key:3,place:'Helsingborg',Time:'17:00',photo:'./Malmö.png'},
    {key:4,place:'Landskrona',Time:'18:00',photo:'./Malmö.png'},
    {key:5,place:'Kävlinge',Time:'19:00',photo:'./Malmö.png'},
   ]);





  return (
    <View style={styles.EventsScreenContainer}>
       <Logo />
       <Text>Welcome Mr: { route.params.paramEmail }</Text>
        <FlatList
         data={events}
         renderItem={({item}) => (
            <TouchableOpacity
             onPress={() =>
                navigation.navigate("DetailsScreen",
                {item:item})
        
             }>
              <Text style={styles.placecontainer}>{item.place}</Text>
              <Text>{item.Time}</Text>
            
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
    padding:100,
  },
  placecontainer:{
  backgroundColor:'red',
  }
});
