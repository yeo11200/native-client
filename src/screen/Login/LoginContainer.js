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

    const goToStream = () => {
        navigation.navigate('Stream')
    }
    return (
        <LoginPresenter
            changeValue={changeValue}
            onPress={onPress}
            inputs={inputs}
            goToStream={goToStream}
        />
    );
}

export default LoginContainer;
