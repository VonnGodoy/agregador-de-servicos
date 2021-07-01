import React from 'react';
import { View, TextInput } from "react-native";
import styles from './customInput.styles';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {

    return (
        <View style={styles.viewCustomInput}>

            <IconSvg width="24" height="24" style={{ color: '#268596' }}/>
        
            <TextInput style={styles.inputCustomInput}
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    );
}