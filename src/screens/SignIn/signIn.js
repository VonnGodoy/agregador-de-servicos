import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { useUserContext } from '../../contexts/UserContext';

import Api from '../../services/Api';

import CustomInput from '../../components/customInput/customInput';
import styles from './signIn.styles';

import AgentLogo from '../../assets/property_agent.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { setUserContext } = useUserContext();
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                setUserContext(json.data);

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else {
                alert('E-mail e/ou senha errados!');
            }

        } else {
            alert("Preencha os campos!");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
      

    return (
        <SafeAreaView style={styles.safeAreaViewSignIn}>

            <AgentLogo width="200" height="200"/>

            <View style={styles.viewSignIn}>
                <CustomInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <CustomInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <TouchableOpacity style={styles.customButtonSignIn} onPress={handleSignClick}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.customButtonTextSignIn} onPress={handleMessageButtonClick}>
                <Text  style={styles.messageButtonTextSignIn} >Ainda não possui uma conta?</Text>
                <Text  style={styles.messageButtonTextBoldSignIn} >Cadastre-se</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}