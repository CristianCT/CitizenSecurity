import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  MapView, { Marker }  from 'react-native-maps';
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
             <View style={styles.headerHome}>
                <Image style={styles.logoHome} source={ require('../assets/logo.png') } resizeMode="cover" />
            </View> 
            <View style={styles.container}>
                <MapView 
                initialRegion={{
                    latitude: 10.405610,
                    longitude: -75.491483,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} 
                style={styles.map}>
                    <Marker 
                        coordinate={{ latitude: 10.405610, longitude: -75.491483 }}
                        image={{ uri: 'https://developers.google.com/maps/documentation/javascript/images/default-marker.png' }}
                        title="Marcador"
                        description="Puta descripción" 
                        onPress={ console.log("Marcador") }/>
                    <Marker 
                        coordinate={{ latitude: 10.405610, longitude: -75.481483 }}
                        image={{ uri: 'https://developers.google.com/maps/documentation/javascript/images/default-marker.png' }}
                        title="Marcador"
                        description="Puta descripción"
                        onPress={ console.log("Marcador") } />
                    <Marker 
                        coordinate={{ latitude: 10.415610, longitude: -75.491483 }}
                        image={{ uri: 'https://developers.google.com/maps/documentation/javascript/images/default-marker.png' }}
                        title="Marcador"
                        description="Puta descripción" 
                        onPress={ console.log("Marcador") }/>
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    headerHome: {
        backgroundColor: '#ffff',
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    logoHome: {
        height: 50,
        width: 300
    }
});
