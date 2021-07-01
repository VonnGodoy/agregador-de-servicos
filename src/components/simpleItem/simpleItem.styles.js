import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    cardButtonSimpleItem: {
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row'
    },
    imageSimpleItem: {
        width: 88,
        height: 88,
        borderRadius: 20
    },
    viewInfoSimpleItem: {
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    viewProfileSimpleItem: {
        width: 90,
        height: 26,
        borderColor: '#4EADBE',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfileSimpleItem: {
        color: '#4EADBE',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textNameSimpleItem: {
        fontSize: 17,
        fontWeight: 'bold'
    },
});

export default styles;