import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Marker, Callout }  from 'react-native-maps';
import CardNewMarker from './Card.new.marker';

export default function CustomMarker(props) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
            <Marker
                coordinate={ props.coordinate }
                image={ require('../assets/Map-Marker.png') }
                title="Marcador"
                description="Puta descripción"
                onPress={ ()=> {} }
                >
                    <Callout >
                        <CardNewMarker/>
                        <CardNewMarker/>
                        <CardNewMarker/>
                        <CardNewMarker/>
                    </Callout>
                    
            </Marker>
    )
}


const styles = StyleSheet.create({
    
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#BBBBBB",
        width: 300,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});