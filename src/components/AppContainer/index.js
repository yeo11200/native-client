import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screen/Login';
import DetailScreen from '../../screen/Detail';
import Stream from '../../screen/Stream';


const Stack = createStackNavigator();

function AppContainer() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Detail" component={DetailScreen} />
                    <Stack.Screen name="Stream" component={Stream} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default AppContainer;
