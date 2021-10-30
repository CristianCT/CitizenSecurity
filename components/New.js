import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";


export default function New(props) {
    return (
        <View style={ styles.card }>
            <View style={ styles.cardContent }>
                <View>
                    <Image style={ styles.sourceImage } source={ require('../assets/u.png') } resizeMode="cover" />
                </View> 
                <View>
                    <Text style={ styles.title }>New Title</Text>
                    <Text style={ styles.info }>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <View style={ styles.footer }>
                        <Text style={ styles.footerText }>Post: 29/Oct/2021</Text>
                    </View>
                </View>
            </View> 
        </View> 
    )
}

const styles = StyleSheet.create({
    
    sourceImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    
    card: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'rgb(255,255,255)',
    },
    cardContent: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 12,
        marginRight: 10,
        marginLeft: 5,
        marginRight: 5
    },
    info: {
        width: 315,
        fontSize: 13,  
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    },
    footer: {
        flexDirection: 'row-reverse',
        paddingRight: 10
    },
    footerText: {
        fontSize: 10,
    },
});