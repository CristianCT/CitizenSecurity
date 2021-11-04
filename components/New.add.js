import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'

export default function NewAdd() {
    return (
        <View>
            <Text style={styles.modalText}>Add New</Text>
            <View>
                <Text>Title</Text>
                <TextInput style={ styles.inputLarge } placeholder="Title"/>
                <Text>Description</Text>
                <TextInput multiline={ true } style={ styles.textArea } />
                <Text>Link</Text>
                <TextInput style={ styles.inputLarge } placeholder="Link"/>
            </View>
            <View>
                <Pressable
                    style={ styles.buttonBlock }
                    onPress={() => console.log('Save New')}
                >
                    <Text style={styles.textStyle}>Save</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 22
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
        marginTop:10,
        marginBottom: 10
    },
    textArea: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        width: 300,
        height: 100,
        marginTop:10,
        marginBottom: 10
    },
    buttonBlock: {
        width: 300,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#367EB7',
        marginTop: 5,
        marginBottom: 5
    }
});
