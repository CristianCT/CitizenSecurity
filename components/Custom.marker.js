import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Marker, Callout }  from 'react-native-maps';
import CardNewMarker from './Card.new.marker';

export default function CustomMarker(props) {
    return (
        <Marker
            coordinate={ props.coordinate }
            image={{ uri: 'https://developers.google.com/maps/documentation/javascript/images/default-marker.png' }}
            title="Marcador"
            description="Puta descripción"
            >
                <Callout style={{ maxHeight: 600 }}>
                    <CardNewMarker/>
                    <CardNewMarker/>
                    <CardNewMarker/>
                    <CardNewMarker/>
                </Callout>
        </Marker>
    )
}

const styles = StyleSheet.create({

    
});