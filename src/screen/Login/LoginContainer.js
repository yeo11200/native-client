import React, {useState,useMemo} from 'react';
import LoginPresenter from './LoginPresenter'

function LoginContainer({ navigation }) {

    const [inputs, setInputs] = useState({
        userId: '',
        password: ''
    });

    const changeValue = (name, e) => {
        setInputs(...inputs, { [name] : e});
    }

    const onPress = (e) => {
        const {userId, password} = inputs;
        console.log(userId, password)
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
