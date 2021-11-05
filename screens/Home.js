import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import  MapView, { Marker, Circle } from 'react-native-maps';
import { View, StyleSheet, Text, Image, Dimensions, Pressable, Alert, Modal} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomMarker from '../components/Custom.marker';
import NewAdd from '../components/New.add';

export default function Home({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
             <View style={styles.headerHome}>
                <Image style={styles.logoHome} source={ require('../assets/logo.png') } resizeMode="cover" />
            </View> 
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <NewAdd/>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <MapView 
                    initialRegion={{
                        latitude: 10.405610,
                        longitude: -75.491483,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} 
                    style={styles.map}>
                        <Marker
                            coordinate={{ latitude: 10.39610, longitude: -75.49183, }}
                            image={ require('../assets/CS-Marker.png') }
                            title="Marcador"
                            description="Puta descripción"
                            onSelect={() => console.log("coordinate")}
                            onDrag={() => console.log("coordinate")}
                            onDragStart={() => console.log("coordinate")}
                            onDragEnd={() => console.log("coordinate")}
                            draggable    
                        >
                        </Marker>
                        <CustomMarker coordinate={{ latitude: 10.405610, longitude: -75.491483 }} />
                        <Circle
                            center={{ latitude: 10.405610, longitude: -75.491483 }}
                            radius={ 700 }
                            fillColor="rgba(255, 0, 0, 0.2)"
                            strokeColor="rgba(255, 0, 0, 0.2)"
                            zIndex={2}
                            strokeWidth={2}
                        />
                        <CustomMarker coordinate={{ latitude: 10.405610, longitude: -75.481483 }} />
                        <Circle
                            center={{ latitude: 10.405610, longitude: -75.481483 }}
                            radius={ 700 }
                            fillColor="rgba(255, 0, 0, 0.2)"
                            strokeColor="rgba(255, 0, 0, 0.2)"
                            zIndex={2}
                            strokeWidth={2}
                        />
                        <CustomMarker coordinate={{ latitude: 10.415610, longitude: -75.491483 }} />
                        <Circle
                            center={{ latitude: 10.415610, longitude: -75.491483 }}
                            radius={ 700 }
                            fillColor="rgba(0, 255, 0, 0.2)"
                            strokeColor="rgba(0, 255, 0, 0.2)"
                            zIndex={2}
                            strokeWidth={2}
                        />
                </MapView>
            </View>
            <Pressable style={ styles.buttonAdd } onPress={ () => {setModalVisible(true)} }>
                <MaterialCommunityIcons name = "plus" color="azure" size = { 50 } /> 
            </Pressable>
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
    },
    buttonAdd: {
        position: 'absolute',
        right: 20,
        top: Dimensions.get('window').height - 50,
        width: 60,
        height: 60,
        backgroundColor: '#367EB7',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
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
/* https://www.youtube.com/watch?v=K2fXs6ghlig&ab_channel=MarioD%C3%ADez */