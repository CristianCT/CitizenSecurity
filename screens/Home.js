import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  MapView from 'react-native-maps';
import { View, StyleSheet, Text, Image, Dimensions, Pressable} from "react-native";

import Marker from '../components/Custom.marker';

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
                    <Marker coordinate={{ latitude: 10.405610, longitude: -75.491483 }} />
                    <Marker coordinate={{ latitude: 10.405610, longitude: -75.481483 }} />
                    <Marker coordinate={{ latitude: 10.415610, longitude: -75.491483 }} />
                </MapView>
            </View>
            <Pressable style={ styles.buttonAdd } onPress={ console.log('A') }>
                <Text>A</Text>
            </Pressable>
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
    },
    buttonAdd: {
        position: 'absolute',
        right: 20,
        top: Dimensions.get('window').height - 35,
        width: 150,
        height: 150,
        color: 'blue',
        borderRadius: 50,
    }
});
