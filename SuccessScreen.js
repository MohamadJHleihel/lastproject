import { View, Text, Image, StyleSheet } from "react-native";

export default function Success({ route }) {
    return (
        <View style={styles.successContainer}>
            <Image source={require('./assets/Hurray.png')} />
            <View>
                <Text>{route.params.parambooking.place}</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    successContainer: {
        flex: 1,
        backgroundColor: '#E4DDDE',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
