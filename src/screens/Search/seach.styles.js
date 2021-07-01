import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    safeAreaViewSearch: {
        flex: 1,
        backgroundColor: '#63C2D1'
    },

    scrollViewSearch: {
        flex: 1,
        padding: 20,
        backgroundColor: '#63C2D1'
    },

    viewHeaderSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textHeaderTitleSearch: {
        width: 250,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF'
    },

    viewLocationSearch: {
        backgroundColor: '#4EADBE',
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30
    },

    textInputLocationSearch: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF'
    },

    buttonLocationSearch: {
        width: 24,
        height: 24
    },

    activityIndicatorSearch: {
        marginTop: 50
    },

    viewListProvidersSearch: {
        marginTop: 30,
        marginBottom: 30
    }
});

export default styles;