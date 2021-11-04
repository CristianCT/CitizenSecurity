import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function CardNewMarker() {
    return (
        <View style={ styles.card }>
            <View style={ styles.header }>
                <View>
                    <Avatar.Image 
                        source={ require('../assets/CS-Logo.png') }
                        size={50}
                    />
                </View>
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 23 }}>Title New</Text>
                    <Text>Username</Text>
                </View>
            </View>
            
            <View>
                <Text>
                    Lorem Ipsum has been the industry's Lorem {"\n"} Lorem Ipsum has been the industry's Lorem {"\n"} Lorem Ipsum has been the industry's Lorem
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F7F7F7',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 10
    },
    header: {
        flexDirection: 'row'
    }
});