import { View,Text, FlatList,Image,StyleSheet } from "react-native";
import Logo from "./Logo";
import { useState } from "react";


export default function Success({route}) {
    const [bookedlist, onAddingbooklist] = useState('');
    return (
        <View style={styles.successContainer}>
            <Image  source={require('./assets/Hurray.png')}/>
            <View>
            <Text>{route.params.parambooking.place}</Text>
            </View>
            {/* <FlatList
            data={route.params.parambooking}
            renderItem={({item}) => {
                <View>
             <Text>{route.params.parambooking.place}</Text>   
               </View>
            
            }}
            /> */}
        </View>


        );
    }
    const styles = StyleSheet.create({
        successContainer: {
          flex:1,
          backgroundColor: '#E4DDDE',
          alignItems: 'center',
          justifyContent: 'center'
        }
        });
