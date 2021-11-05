import React from 'react';

import { connect } from 'react-redux';

const PrivateRoute = (props) => {
    if(!props.isAuthenticated){
        props.navigation.navigate('Login');
    } else {
        return (
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
        )
    }
}

const mapStateToProps = state => {
    return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps)(PrivateRoute)