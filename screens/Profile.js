import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeProfile from './Home.profile';
import HistoryProfile from './History.profile';
import ConfigProfile from './Config.profile';
import SupportProfile from './Support.profile';

import DrawerProfile from '../components/Drawer.profile';


const Drawer = createDrawerNavigator();

export default class Profile extends Component {
    render(){
        return (
            <Drawer.Navigator drawerContent={props => <DrawerProfile { ...this.props } />} initialRouteName="Home Profile">
                <Drawer.Screen name="Home Profile" component={HomeProfile} />
                <Drawer.Screen name="History Profile" component={HistoryProfile} />
                <Drawer.Screen name="Config Profile" component={ConfigProfile} />
                <Drawer.Screen name="Support Profile" component={SupportProfile} />
            </Drawer.Navigator>
        )
    }
}


