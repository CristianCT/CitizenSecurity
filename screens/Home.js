import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, ScrollView, Text, Image, Dimensions } from "react-native";


export default function Home(props) {
    return (
        <View style={{ flex: 1 }}>
             <View style={styles.headerHome}>
                <Image style={styles.logoHome} source={ require('../assets/logo.png') } resizeMode="cover" />
            </View> 
            
            
            <View style={styles.container}>
                <MapView style={styles.map} />
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
