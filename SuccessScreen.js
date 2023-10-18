import { View,Text, FlatList } from "react-native";
import Logo from "./Logo";
import { useState } from "react";


export default function Success({route}) {
    const [bookedlist, onAddingbooklist] = useState('');
    return (
        <View>
            <Logo/>
            <View>
           {/*  <Text>{route.params.parambooking.place}</Text> */}
            </View>
            <FlatList
            data={route.params.parambooking}
            renderItem={({item}) => {
                <View>
             <Text>{route.params.parambooking.place}</Text>   
               </View>
            
            }}
            />
        </View>


        );
    }