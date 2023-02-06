import { View, Text } from 'react-native'
import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';

const StackNav = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={DashboardScreen} />
        </Stack.Navigator>
    )
}

export default StackNav