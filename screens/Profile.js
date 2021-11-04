import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeProfile from './Home.profile';
import HistoryProfile from './History.profile';
import ConfigProfile from './Config.profile';
import SupportProfile from './Support.profile';

import DrawerProfile from '../components/Drawer.profile';


const Drawer = createDrawerNavigator();

export default function Profile(props) {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerProfile { ...props } />} initialRouteName="Home Profile">
            <Drawer.Screen name="Home Profile" component={HomeProfile} />
            <Drawer.Screen name="History Profile" component={HistoryProfile} />
            <Drawer.Screen name="Config Profile" component={ConfigProfile} />
            <Drawer.Screen name="Support Profile" component={SupportProfile} />
        </Drawer.Navigator>
    )
}
