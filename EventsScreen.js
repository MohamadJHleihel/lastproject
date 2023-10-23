
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import Logo from './Logo';


export default function EventsScreen({ navigation, route }) {
    const [events, addEvents] = useState([
        { Key: 1, bandName: 'Metallica', place: 'malmö', Time: '15:00', photo: require('./assets/Malmö.png'), bandLogo: require('./assets/Metalica.png'),Info: 'Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist and guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The bands fast tempos, instrumentals, and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax, and Slayer. Metallicas current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett, and bassist Robert Trujillo. Guitarist Dave Mustaine, who formed Megadeth after being fired from Metallica, and bassists Ron McGovney, Cliff Burton, and Jason Newsted are former members of the band.' },
        { key: 2, bandName: 'Red Hot Chili Peppers', place: 'lund', Time: '16:00', photo: require('./assets/Lund.png'), bandLogo: require('./assets/RedHot.png'),Info: '  gggg ' },
        { key: 3, bandName: 'Green Day', place: 'Helsingborg', Time: '17:00', photo: require('./assets/Helsingborg.png'), bandLogo: require('./assets/GreenDay.png'),Info: 'ggggg' },
        { key: 4, bandName: 'Måneskin', place: 'Landskrona', Time: '18:00', photo: require('./assets/Landskrona.png'), bandLogo: require('./assets/Maneskin.png'),Info: 'ggggg' },
        { key: 5, bandName: 'Muse', place: 'Kävlinge', Time: '19:00', photo: require('./assets/Malmö.png'), bandLogo: require('./assets/Muse.png'),Info: 'ggggggg' },
    ]);

    itemSeparator = () => {
        return <View style={{ color: 'green', height: 20}} />
    }

    return (
        <View style={styles.EventsScreenContainer}>
            <Logo />
            <Text>Welcome Mr: {route.params.paramEmail}</Text>
            <View style={styles.flatListStyle}>
                <FlatList
                    numColumns={2}
                    data={events}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("DetailsScreen",
                                    { item: item })
                            }>
                            <Image source={item.bandLogo} style={{width:100 , height:50, marginHorizontal:24}}/>
                            <Text /* style={styles.placecontainer} */>{item.bandName}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
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
        padding: 30,
    },

    placecontainer: {
        backgroundColor: '#E4DDDE',
        paddingLeft:50
    },

    flatListStyle: {
        width: '100%',
        backgroundColor: '#E4DDDE',
        alignItems:'center',
        padding: 5
    }
});
