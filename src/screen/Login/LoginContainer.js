import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import LoginPresenter from './LoginPresenter'

import { COMMON_API } from '~/asstes/js/common';

function LoginContainer({ navigation, setIsLogin }) {

    console.log(COMMON_API);
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

    const onPress = React.useCallback(async (e) => {

        const { userId, password } = inputs;
        const data = { 'userId' : userId, 'password' : password};
        
        axios.post(COMMON_API+'/user/login', data).then(async (res) => {
            const items = res.data;

            console.log(items);
            if(items.ok === true){

                const data = items.data;

                const info = data.info;
                const point = data.point;

                await AsyncStorage.setItem('test', JSON.stringify({'userId': info.userId, 'token': info.token, 'point' : point.point}));
                setIsLogin(true);
            }else{
                alert('오류');
            }
            
            
        }).catch((e) => {

        })
    })

    return (
        <LoginPresenter
            changeValue={changeValue}
            onPress={onPress}
            inputs={inputs}
        />
    );
}

export default LoginContainer;
