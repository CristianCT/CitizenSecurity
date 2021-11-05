import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native'

export default function HomeProfile(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50, margin:30, color: 'rgba(0, 0, 0, 0.7)' }}>LOGIN</Text>
            <Image style={ styles.userImg } source={ require('../assets/user.png') } />
            <View>
                <Text>Email</Text>
                <TextInput style={ styles.inputLarge } placeholder="Email"/>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput secureTextEntry={ true } style={ styles.inputLarge } placeholder="Password"/>
            </View>
            <View>
                <Pressable
                    style={ styles.buttonBlock }
                    onPress={() => console.log('Login')}
                >
                    <Text style={styles.textStyle}>Login</Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={ styles.buttonBlockSecondary }
                    onPress={() => {props.navigation.navigate('Register')}}
                >
                    <Text style={styles.textStyle}>Register</Text>
                </Pressable>
            </View>
            <View style={{ margin:20 }}>
                <Pressable onPress={() => console.log('Forgot Password?')}>
                    <Text>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({    
    userImg: {
        width: 200,
        height: 200
    },
    emailUser: {
        fontSize: 30,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    inputLarge: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        width: 300,
        height: 50,
        marginTop:5,
        marginBottom: 10,
        fontSize: 18
    },
    buttonBlock: {
        width: 300,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#367EB7',
        marginTop: 5,
        marginBottom: 5
    },
    buttonBlockSecondary: {
        width: 300,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#BBBBBB',
        marginTop: 5,
        marginBottom: 5
    }
});