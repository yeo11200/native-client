import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { View, Text, Button, BackHandler, Platform } from 'react-native';

function DetailScreen({ navigation }) {


    useEffect(() => {
        if(Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        }

        return () => {
            if(Platform.OS === 'android'){
                BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
            }   
        }
    }, [])

    const handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => AsyncStorage.removeItem('test')}
            />
        </View>
    );
}

export default DetailScreen;
