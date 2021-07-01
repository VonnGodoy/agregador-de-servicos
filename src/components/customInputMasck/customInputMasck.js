import React from 'react';
import { View } from "react-native";
import styles from './customInputMasck.styles';
import { TextInputMasck } from 'react-native-masked-text';

export default ({IconSvg, placeholder, value, onChangeText, type, options}) => {

    return (
        <View style={styles.viewCustomInput}>

            <IconSvg width="24" height="24" style={{ color: '#268596' }}/>
        
            <TextInputMasck style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                type={'cel-phone'}
                options={{
                    withDDD: true,
                    dddMask: "(61) ",
                    maskType: "BRL"
                }}
            />
        </View>
    );
}