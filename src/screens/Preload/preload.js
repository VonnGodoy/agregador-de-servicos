import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { View , ActivityIndicator} from "react-native";
import { useUserContext } from '../../contexts/UserContext';
import Api from '../../services/Api';

import styles from './preload.styles';
import AgentLogo from '../../assets/property_agent.svg';

export default () => {

    const { setUserContext }  = useUserContext();
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                if(res.token) {

                    await AsyncStorage.setItem('token', res.token);

                    setUserContext(res.data);

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });

                } else {
                    navigation.navigate('SignIn');
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <View style={styles.viewPreLoad}>
            <AgentLogo width="100%" height="160" />
            <ActivityIndicator style={styles.activityIndicatorPreLoade} size="large" color="#FFFFFF" />
        </View>
    );
}