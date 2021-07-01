import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaViewSignUp: {
        backgroundColor: '#63C2D1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSignUp: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    customButtonSignUp: {
        height: 60,
        backgroundColor: '#268596',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customButtonTextSignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    messageButtonTextSignUp: {
        fontSize: 16,
        color: '#268596'
    },
    messageButtonTextBoldSignUp: {
        fontSize: 16,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default styles;