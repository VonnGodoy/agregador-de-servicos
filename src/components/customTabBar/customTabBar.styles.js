import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    tabView: {
        height: 60,
        backgroundColor: '#4EADBE',
        flexDirection: 'row' 
    },
    tabButtom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButtomCenter: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 35,
        borderColor: '#4EADBE',
        marginTop: -20,
    },
    tabAvatarIcon: {
        width: 24,
        height: 24,
        borderRadius: 12
    },

});

export default styles;