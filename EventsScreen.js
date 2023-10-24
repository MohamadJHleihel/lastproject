
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
import Logo from './Logo';


export default function EventsScreen({ navigation, route }) {
    const [events, addEvents] = useState([
        { Key: 1, bandName: 'Metallica', place: 'malmö', Time: '15:00', photo: require('./assets/Malmö.png'), bandLogo: require('./assets/Metalica.png'),Info: 'Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist and guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The bands fast tempos, instrumentals, and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax, and Slayer. Metallicas current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett, and bassist Robert Trujillo.' },
        { key: 2, bandName: 'Red Hot Chili Peppers', place: 'lund', Time: '16:00', photo: require('./assets/Lund.png'), bandLogo: require('./assets/RedHot.png'),Info: 'The Red Hot Chili Peppers, commonly abbreviated as RHCP or Chilli Peppers, are an American rock band formed in Los Angeles in 1982, comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal, rap metal, rap rock, and nu metal. With over 120 million records sold worldwide, the Red Hot Chili Peppers are one of the best-selling bands of all time.' },
        { key: 3, bandName: 'Green Day', place: 'Helsingborg', Time: '17:00', photo: require('./assets/Helsingborg.png'), bandLogo: require('./assets/GreenDay.png'),Info: 'Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt. For most of the bands career they have been a power trio  with drummer Tré Cool, who replaced John Kiffmeyer in 1990 before the recording of the bands second studio album, Kerplunk 1991. Before taking its current name in 1989, Green Day was called Blood Rage, then Sweet Children and they were part of the late 1980s/early 1990s Bay Area punk scene that emerged from the 924 Gilman Street club in Berkeley, California.' },
        { key: 4, bandName: 'Måneskin', place: 'Landskrona', Time: '18:00', photo: require('./assets/Landskrona.png'), bandLogo: require('./assets/Maneskin.png'),Info: 'Måneskin[a] is an Italian rock band formed in Rome in 2016. The band is composed of lead vocalist Damiano David, bassist Victoria De Angelis, guitarist Thomas Raggi, and drummer Ethan Torchio. Performing in the streets in their early days, Måneskin rose to prominence after coming in second in the eleventh season of the Italian version of X Factor in 2017. Their international breakthrough occurred when the foursome won the Eurovision Song Contest 2021 for Italy with the song "Zitti e buoni".' },
        { key: 5, bandName: 'Muse', place: 'Kävlinge', Time: '19:00', photo: require('./assets/Malmö.png'), bandLogo: require('./assets/Muse.png'),Info: 'Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums).' },
    ]);

    itemSeparator = () => {
        return <View style={{ color: 'green', height: 20}} />
    }

    return (
        <View style={styles.EventsScreenContainer}>
            <View style={styles.EventsHeader}>
            <Logo />
            <Text style={styles.bigtext}>Welcome back {route.params.paramEmail} !</Text>
            </View>
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
        justifyContent: 'flex-start',
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
    },
    EventsHeader:{
        marginBottom:70,
        alignItems:'center'
    },
    bigtext: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#8B6C70',
        fontWeight: 'bold'
      },
});
