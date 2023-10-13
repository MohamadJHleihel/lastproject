import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,Alert, TouchableOpacity} from 'react-native';
import { useState } from 'react';



export default function DetailsScreen() {

  return (
    <View style={styles.DetailsScreenContainer}>
        <Text>Picture from API</Text>
   
      <View>
        <Button 
        title='Book'
        onPress={() => {
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
