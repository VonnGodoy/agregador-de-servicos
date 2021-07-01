import React from 'react';
import { Modal , View, Text, TouchableOpacity} from "react-native";
import styles from './customBottomSheet.styles';

import IconSvg from '../../assets/alert.svg';

export default ({visible, setVisible ,message ,type , onPressButtonCancel, onPressButtonConfirm }) => {

    const closeModal = () => {
        setVisible(false);
    }


    return (
        <Modal style={styles.modalBottomSheet}
        transparent={true}
        visible={visible}
        animationType="slide">

            <View style={styles.viewBottomSheet}>

                <View style={styles.viewContainerBottomSheet}>

                    <View style={styles.viewInfoBottomSheet}>
                        <View style={styles.viewInfoIconBottomSheet}>
                        { type === 'alert' &&
                            <IconSvg width="50" height="50" fill="#FFEE33"/>
                        }{ type === 'error' &&
                            <IconSvg width="50" height="50" fill="#FF0000"/>
                        }{ type === 'info' &&
                            <IconSvg width="50" height="50" fill="#268596"/>
                        }
                        </View>

                        <View style={styles.viewInfoTextBottomSheet}>
                            <Text style={styles.textViewInfoBottomSheet}>{message}</Text>
                        </View>
                    </View>

                    { type === 'info' ?
                        <View style={styles.viewBottomBottomSheet}>
                            <TouchableOpacity style={styles.buttonCancelBottomSheet} onPress={onPressButtonCancel}> 
                                <Text style={styles.textButtonCancelBottomSheet}> Cancelar </Text> 
                            </TouchableOpacity>   
                            <TouchableOpacity style={styles.buttonConfirmBottomSheet} onPress={onPressButtonConfirm}> 
                                <Text style={styles.textButtonConfirmBottomSheet}> Confirmar </Text> 
                            </TouchableOpacity>   
                        </View>
                     :
                        <View>
                            <TouchableOpacity style={styles.buttonOkBottomSheet} onPress={closeModal()}> 
                                <Text style={styles.textButtonOkBottomSheet}> Entendi </Text> 
                            </TouchableOpacity>            
                        </View>
                    }
                </View>
            </View>
        </Modal>
    );
}