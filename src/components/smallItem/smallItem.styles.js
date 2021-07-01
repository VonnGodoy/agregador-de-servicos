import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     
     cardButtonSmallItem: {
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        flex: 1,
        //width: '100%',
    },
    imageSmallItem: {
        width: 55,
        height: 55,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#999999',
        marginRight: 15
    },
    textNameSmallItem: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;