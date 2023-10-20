import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,FlatList,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Logo from './Logo';
import Login from './Login';




export default function EventsScreen({navigation,route}) {
const [events, addEvents]= useState([
    {Key:1,bandName:'Metallica',place:'malmö',Time:'15:00',photo:require('./Malmö.png')},
    {key:2,bandName:'Red Hot Chili Peppers',place:'lund',Time:'16:00',photo:require('./Malmö.png')},
    {key:3,bandName:'Green Day',place:'Helsingborg',Time:'17:00',photo:require('./Malmö.png')},
    {key:4,bandName:'Måneskin',place:'Landskrona',Time:'18:00',photo:require('./Malmö.png')},
    {key:5,bandName:'Muse',place:'Kävlinge',Time:'19:00',photo:require('./Malmö.png')},
   ]);

itemSeparator = () =>{
    return<View style={{color:'green', height:57}}/>
}



  return (
    <View style={styles.EventsScreenContainer}>
       <Logo />
       <Text>Welcome Mr: { route.params.paramEmail }</Text>
       <View style={styles.flatListStyle}>
        <FlatList
         data={events}
         ItemSeparatorComponent={itemSeparator}
     /*     ListEmptyComponent={} */
         renderItem={({item}) => (
            <TouchableOpacity
             onPress={() =>
                navigation.navigate("DetailsScreen",
                {item:item})
        
             }>
              <Text style={styles.placecontainer}>{item.bandName}</Text>
              <Text>{item.Time}</Text>
            
            </TouchableOpacity>

       



         )}
        
        />
        </View>

   
      <Text>Open up App.js to start working on your app!</Text>
      
      
      

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  EventsScreenContainer: {
    flex: 1,
    backgroundColor: '#E4DDDE',
    alignItems: 'center',
    justifyContent: 'center',
    padding:100,
  },

  placecontainer:{
  backgroundColor:'#E4DDDE',
  },

  flatListStyle:{ 
   width:'100%',
   backgroundColor:'#ccffcc'
  }
});
