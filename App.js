import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; /* https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json */

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import News from './screens/News';
import Home from './screens/Home';
import Profile from './screens/Profile'

function MainScreens() {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      activeColor = "#005FAC"
      inactiveColor = "#3F5C6C"
      barStyle = {{ backgroundColor : '#ffff' }} 
    > 
    
      <Tab.Screen 
        name = "News"
        component = { News }
        options = { {
          tabBarLabel : 'News' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "newspaper" color = { color } size = { 26 } /> 
          ),
        }}
      />

      <Tab.Screen 
        name = "Home"
        component = { Home }
        options = { {
          tabBarLabel : 'Home' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "home" color = { color } size = { 26 } /> 
          ),
        }}
      />

      <Tab.Screen 
        name = "Profile"
        component = { Profile }
        options = { {
          tabBarLabel : 'Profile' , 
          tabBarIcon : ({ color }) => (   
            <MaterialCommunityIcons name = "account" color = { color } size = { 26 } /> 
          ),
        }}
      />

    </Tab.Navigator>
  )
}



function MyStack () {
  return(
    <Stack.Navigator 
      initialRouteName = "MainScreens"
      headerMode = 'none'
    > 
      <Stack.Screen 
        name = "MainScreens"
        component = { MainScreens }
        options = {{ title:"MainScreens" }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 50, /* Margen superior -> Prueba */
  },
});
