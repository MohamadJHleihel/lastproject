import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';



export default function DetailsScreen({ navigation, route }) {

    function placeAlert() {

        Alert.alert('Place', route.params.item.place,
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'Book', onPress: () => {
                    navigation.navigate("Success",
                        { parambooking: parambooking })
                }
            },
            ]);
    }


    function timeAlert() {

        Alert.alert('Time', route.params.item.Time,
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed')
            },
            {
                text: 'Book', onPress: () => {
                    navigation.navigate("Success",
                        { parambooking: parambooking })
                }
            },
            ]);
    }





    const [parambooking, onaddingparambooking] = useState(route.params.item);
    return (
        <View style={styles.DetailsScreenContainer}>
            <Text style={styles.DetailsHeader}>Join us at :{parambooking.Time}</Text>
            <Image
                source={route.params.item.photo}
                style={{ flex: 2, width: '98%', borderRadius:6 }}
            />
            <FlatList
                data={parambooking}
                flexDirection='row'
                renderItem={({ parambooking }) => (
                    <View >     <Text>{parambooking.Time}</Text>      </View>

                )}
            />





            <View style={styles.booking}>
                <Text> the details from API</Text>
                <Button
                    title='Book'
                    onPress={() => {
                        navigation.navigate("Success",
                            { parambooking: parambooking })
                    }} />
            </View>
            <View style={styles.ButtonsDetailsScreenContainer}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            timeAlert();
                        }}
                        style={styles.timeAndPlace}>

                        <Text style={{ fontSize: 50 }}>Time</Text>

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            placeAlert();
                        }}
                        style={styles.timeAndPlace}>

                        <Text style={{ fontSize: 50 }}>Place</Text>

                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("FoodScreen");
                        }}
                        style={styles.timeAndPlace}>

                        <Text style={{ fontSize: 50 }}>Food</Text>

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
        backgroundColor: '#E4DDDE',
        alignItems: 'center',
        justifyContent: 'center'

    },
    DetailsHeader: {
        flex: 0.5
    },
    booking: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor: '#E4DDDE',
        justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        
    },

    ButtonsDetailsScreenContainer: {
        flex: 1,
        backgroundColor: '#cccccc',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    timeAndPlace: {
        backgroundColor: '#8B6C70',
        margin: 10,
        borderWidth: 0.25,
        borderRadius: 5
    },
});
