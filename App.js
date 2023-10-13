import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './Login';
import DetailsScreen from './DetailsScreen';
import EventsScreen from './EventsScreen';



export default function App() {
  return (
    <View style={styles.container}>
   
    
      <EventsScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
