import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import Api from '../../services/Api'
export default () => {

    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await Api.logout();

        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    } 

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <TouchableOpacity onPress={handleLogoutClick}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}