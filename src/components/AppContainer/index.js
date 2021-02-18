import React, { useEffect, useState } from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screen/Login';
import DetailScreen from '../../screen/Detail';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

function lenent(isLogin) {
    console.log('활성 사용자 수를 세는중...');
    return isLogin;
}

function AppContainer() {
    
    console.log('test', 'test');
    const [ isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        async function token() {
            const token = await AsyncStorage.getItem('test');
      
            if(token) setIsLogin(true);
          }
          
          token();
    },[])

    const isLoginYn = React.useMemo(() => lenent(isLogin), [isLogin]);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}
                >
                    {
                        isLoginYn === false ? 
                            <Stack.Screen name="Login">
                                { (navigation) => <LoginScreen navigation={navigation} setIsLogin={setIsLogin} /> }
                            </Stack.Screen> : 
                            <Stack.Screen name="Detail" component={DetailScreen} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default AppContainer;
