import React from 'react';

import { TouchableOpacity, Text ,Image} from "react-native";
import styles from './smallItem.styles';

export default ({IconSvg, avatar, name, disabled}) => {
    return (
        <TouchableOpacity disabled={disabled} style={styles.cardButtonSmallItem} >
            { IconSvg &&
                <IconSvg width="30" height="30" style={{ color: '#268596' }}/>
            }
            { avatar &&
                <Image style={styles.imageSmallItem} source={{ uri: avatar }}/>
            }
            <Text style={styles.textNameSmallItem}>{name}</Text>
        </TouchableOpacity>
    );
}