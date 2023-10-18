import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,Alert, TouchableOpacity} from 'react-native';
import { useState } from 'react';



export default function DetailsScreen({navigation,route}) {
const parambooking = route.params.item;
  return (
    <View style={styles.DetailsScreenContainer}>
        <Text>{route.params.item.place}</Text>
        <Image 
        source={route.params.item.photo}
        style ={{height:200, width:200}}
        /> 
        
      <View>
        <Button 
        title='Book'
        onPress={() => {
            navigation.navigate("Success",
            {parambooking:parambooking})
        }}/>
      </View>
      <View>
        <Text> the details from API</Text>
      </View>
     <View style={styles.ButtonsDetailsScreenContainer}>
      <View>
        <TouchableOpacity
        onPress={() =>{}}>
        
        <Text>Time</Text>
      
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
        onPress={() =>{}}>
        
        <Text>Place</Text>
      
        </TouchableOpacity>
      </View>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  DetailsScreenContainer: {
    flex: 3,
    backgroundColor: '#ccccff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },

  ButtonsDetailsScreenContainer: {
    flex: 2,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    padding:90,
  },
});
