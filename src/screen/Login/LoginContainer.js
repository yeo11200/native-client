import AsyncStorage from '@react-native-community/async-storage';
import React, {useState,useMemo, useEffect} from 'react';
import LoginPresenter from './LoginPresenter'

function LoginContainer({ navigation, setIsLogin }) {

    const [inputs, setInputs] = useState({
        userId: '',
        password: ''
    });

    const changeValue = (name, value) => {
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    }

    const onPress = async (e) => {
        const {userId, password} = inputs;
        console.log(userId, password)
        // navigation.push('Detail');
        await AsyncStorage.removeItem('test');
        await AsyncStorage.setItem('test', JSON.stringify({'userId': userId, 'password': password}));
        setIsLogin(true);
    };

    return (
        <LoginPresenter
            changeValue={changeValue}
            onPress={onPress}
            inputs={inputs}
        />
    );
}

export default LoginContainer;
