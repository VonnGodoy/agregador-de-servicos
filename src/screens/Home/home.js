import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, SafeAreaView ,Linking } from "react-native";
import { useUserContext } from '../../contexts/UserContext';

import Api from '../../services/Api';

import styles from './home.styles';

import AgentLogo from '../../assets/property_agent.svg';
import SearchIcon from '../../assets/search.svg';

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
        
    Linking.openURL("geo: -21.5864258, -46.684084");
        
        //Linking.openURL('www.agregadordeservicos.com.br');
    }
      

    return (
        <SafeAreaView style={styles.safeAreaViewHome}>

            <AgentLogo width="200" height="200"/>

            <View style={styles.viewHome}>
                <Text  style={styles.textHome} >Bem Vindo</Text>
            </View>

            <TouchableOpacity style={styles.buttonHome} onPress={handleMessageButtonClick}>
                <Text  style={styles.textButtonHome} >www.agregadordeservicos.com.br</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}