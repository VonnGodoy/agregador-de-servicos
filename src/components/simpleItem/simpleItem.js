import React ,{ useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View, Text } from "react-native";

import { useProviderContext } from '../../contexts/ProviderContext';
import styles from './simpleItem.styles';
import Stars from '../stars/stars';

export default ({provider, router, disabled}) => {

    const { setProviderContext } = useProviderContext(); 

    const navigation = useNavigation();
    const handleClick = () => {
        
        setProviderContext(provider);
        navigation.navigate(router);
    }

    return (
        <TouchableOpacity disabled={disabled} style={styles.cardButtonSimpleItem} onPress={handleClick}>
            <Image style={styles.imageSimpleItem} source={{uri: provider.avatar}} />
            <View style={styles.viewInfoSimpleItem}>
                <Text style={styles.textNameSimpleItem}>{provider.name}</Text>

                <Stars stars={provider.stars} showNumber={true} />

                <View style={styles.viewProfileSimpleItem}>
                    <Text style={styles.textProfileSimpleItem}>Ver Perfil</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}