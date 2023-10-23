import { View, Text, Image, StyleSheet } from "react-native";

export default function Success({ route }) {
    return (
        <View style={styles.successContainer}>
            <Image source={require('./assets/H.png')} style={{width:'100%',height:400}} />
            <View>
                <Text>Thank you for using our app and we hope you enjoy the {route.params.parambooking.bandName} concer live in {route.params.parambooking.place}. The conerct starts at {route.params.parambooking.Time} so be sure to be there at least 15 mins before. Enjoy!</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    successContainer: {
        flex: 1,
        backgroundColor: '#E4DDDE',
        alignItems: 'center',
        
    }
});
