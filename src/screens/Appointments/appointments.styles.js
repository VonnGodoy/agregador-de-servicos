import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    viewHeaderAppointments: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeaderAppointments: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    safeAreaViewAppointments: {
        flex: 1,
        backgroundColor: '#63C2D1'
    },
    scrollAppointments: {
        flex: 1,
        padding: 20   
    },
    viewAppointments: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 20,
    },

    activityIndicatorAppointments: {
        marginTop: 50,
    },
    viewProviderAppointments:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,

    },
    imageProviderAppointments: {
        width: 55,
        height: 55,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#999999',
        marginRight: 15
    },
    textNameProviderAppointments: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewServiceAppointments: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textServiceNameAppointments: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textServicePriceAppointments: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewSchedulingAppointments: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonDateSchedulingAppointments: {
        width: 120, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10, 
        marginTop: 5,  
        paddingBottom: 5, 
        borderWidth: 3 ,
        borderColor: '#4EADBE'
    },
    textButtonDateSchedulingAppointments: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#4EADBE',
    },
    buttonHourSchedulingAppointments: {
        width: 60, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10, 
        marginTop: 5,  
        paddingBottom: 5, 
        borderWidth: 3 ,
        borderColor: '#4EADBE'
    },
    textButtonHourSchedulingAppointments: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#4EADBE',
    },

    buttonCalncelSchedulingAppointments: {
        borderColor: '#FF0000',
        borderWidth: 3 ,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButtonCalncelSchedulingAppointments: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#FF0000',
    },
});

export default styles;