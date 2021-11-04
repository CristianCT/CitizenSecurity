import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function HomeProfile() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={ styles.userImg } source={ require('../assets/user.png') } />
            <View>
                <Text style={ styles.nameUser }>Name User</Text>
            </View>
            <View>
                <Text>Ejemplo@correo.com.co</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({    
    userImg: {
        width: 200,
        height: 200
    },
    nameUser: {
        fontSize: 30,
    }
});