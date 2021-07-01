import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalBottomSheet: {
      
    },
    viewBottomSheet: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000',
        opacity: 0.7,
    },
    viewContainerBottomSheet: {
        backgroundColor: '#268596',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
    },
    viewHeaderBottomSheet: {
        backgroundColor: '#268596',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10

    },
    textHeaderAlertBottomSheet: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFEE33',
    },
    textHeaderErrorBottomSheet: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF0000',
    },
    textHeaderInfoBottomSheet: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#268596',
    },
    viewInfoBottomSheet: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10
    },

    viewInfoIconBottomSheet: {
        maxHeight: 60,
        marginLeft: 15,
        marginRight: 15,
    },

    viewInfoTextBottomSheet: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    buttonOkBottomSheet: {
        borderColor: '#FFEE33',
        borderWidth: 3,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textViewInfoBottomSheet: {
        fontSize: 17,
        fontWeight: 'bold'
    },

    viewBottomBottomSheet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        padding: 10
    },
    textButtonOkBottomSheet: {
        color: '#FFEE33',
        fontSize: 17,
        fontWeight: 'bold'
    },

    buttonCancelBottomSheet: {
        width: '50%',
        borderColor: '#FF0000',
        borderWidth: 3,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5
    },
    textButtonCancelBottomSheet: {
        color: '#FF0000',
        fontSize: 17,
        fontWeight: 'bold'
    },

    buttonConfirmBottomSheet: {
        width: '50%',
        borderColor: '#FFFFFF',
        borderWidth: 3,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5
    },
    textButtonConfirmBottomSheet: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default styles;