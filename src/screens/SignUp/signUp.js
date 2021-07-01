import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

import { useUserContext } from '../../contexts/UserContext';

import CustomInput from '../../components/customInput/customInput';

import styles from './signUp.styles';
import Api from '../../services/Api';
import AgentLogo from '../../assets/property_agent.svg';
import PersonIcon from '../../assets/person.svg';
import IdentityIcon from '../../assets/identity.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PhoneIcon from '../../assets/telephone.svg';
import CompanyIcon from '../../assets/company.svg';

export default () => {
    const { setUserContext} = useUserContext();
    const navigation = useNavigation();

    const [cpfCnpjField, setCpfCnpjField] = useState('');
    const [nameField, setNameField] = useState('');
    const [razaoSocialField, setRazaoSocialField] = useState('');
    const [phoneNumberField, setPhoneNumberField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                setUserContext(res.data);

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <SafeAreaView style={styles.safeAreaViewSignUp}>

            <AgentLogo width="200" height="200" />

            <View style={styles.viewSignUp}>

                <CustomInput
                    IconSvg={IdentityIcon}
                    placeholder="Cpf / Cnpj"
                    value={cpfCnpjField}
                    onChangeText={t=>setCpfCnpjField(t)}
                />

                <CustomInput
                    IconSvg={PersonIcon}
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <CustomInput
                    IconSvg={EmailIcon}
                    placeholder="E-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <CustomInput
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <TouchableOpacity style={styles.customButtonSignUp} onPress={handleSignClick}>
                    <Text style={styles.text}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.customButtonTextSignUp} onPress={handleMessageButtonClick}>
                <Text style={styles.messageButtonTextSignUp}>Já possui uma conta?</Text>
                <Text style={styles.messageButtonTextBoldSignUp}>Faça Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}