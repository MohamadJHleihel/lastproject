import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './Login';
import DetailsScreen from './DetailsScreen';
import EventsScreen from './EventsScreen';
import Success from './SuccessScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FoodScreen from './FoodScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  //const style =
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
         name="Login" 
         component={Login} 
         options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#F8C8BA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />

      </Stack.Navigator>
    </NavigationContainer>




  );
}










/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */