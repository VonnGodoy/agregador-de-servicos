import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    safeAreaViewSignIn: {
        backgroundColor: '#63C2D1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSignIn: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    customButtonSignIn: {
        height: 60,
        backgroundColor: '#268596',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customButtonTextSignIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    messageButtonTextSignIn: {
        fontSize: 16,
        color: '#268596'
    },
    messageButtonTextBoldSignIn: {
        fontSize: 16,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default styles;