import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Dimensions } from "react-native";

import New from '../components/New';

export default function News(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerHome}>
                <Image style={styles.logoHome} source={ require('../assets/logo.png') } resizeMode="cover" />
            </View> 
            <ScrollView>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
                <New/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({    
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