import React from 'react';
import { StyleSheet,Keyboard, View, Text, TextInput , TouchableWithoutFeedback, KeyboardAvoidingView, Platform} from 'react-native';
import { Layout, Button , Icon } from '@ui-kitten/components';

const LoginIcon = (props) => (
    <Icon {...props} name='log-in-outline'/>
);

function LoginPresenter({ changeValue,onPress, inputs }) {
    
    const onChangeHandler = (name, e)=>{
        changeValue(name, e);
    }

    const onPressHandler = (e)=>{
        onPress(e);
        // 해당 이벤트가 발생할 경우 keyboard가 사라진다. Keyboard.dismiss;
    }

    return (
        <View style={styles.containerView}  behavior={ Platform.OS === 'IOS' ? "height" : "padding"}>
            <Text style={styles.logoText}>Sample Login</Text>
            <View style={styles.loginFormView}>
                <TextInput placeholder="아이디" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                            onChangeText={(e) => onChangeHandler("userId", e)}
                            value={inputs.userId}
                />

                {/** 
                 * secureTextEntry : Text에 대한 내용을 * -> input type="password" 효과
                 * defalut : false 
                 * onChangeText : 해당하는 텍스트의 값을 가져온다.
                 * onChagne : e.target.name, e.target.value를 사용 못함
                 */}
                <TextInput placeholder="패스워드" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
                            onChangeText={(e) => onChangeHandler("password", e)}
                            value={inputs.password}
                />

                {/**
                 * alignSelf : 해당 css 다른 것에 영향 없이 단독적으로 위치를 조절 할 수 있는, css
                 * onPress : web에서는 onClick을 해도 먹히지만, native에서는 onPress를 사용해서 클릭이벤트 전달
                 */}
                <Button style={styles.button} status='primary' size='medium' accessoryLeft={LoginIcon} onPress={onPressHandler}>로그인</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center'
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,

    },
    button: {
        marginTop: 15,
        height: 50,
        width : 180,
        alignSelf:'center'
    },
});

export default LoginPresenter;
