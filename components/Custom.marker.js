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
                >
                    <Callout >
                        <CardNewMarker
                          newInformation={{
                            title: 'Atraco a mano armada en Socorro',
                            description: 'El atraco fue realizado con arma blanca'
                          }}
                        />
                        <CardNewMarker
                          newInformation={{
                            title: 'Robo en Medellín',
                            description: 'Grupo de 20 personas intentaron atracar'
                          }}
                        />
                        <CardNewMarker
                          newInformation={{
                            title: 'Asaltante dispara a dueño de tienda',
                            description: 'El hecho ocurrio a las 8:00 am de ayer'
                          }}
                        />
                        <CardNewMarker
                          newInformation={{
                            title: 'Secuestro a menor en el Pozón',
                            description: 'El menor fue visto por ultima vez en la terraza de su casa'
                          }}
                        />
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