import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalScheduling: {
      
    },
    viewModalScheduling: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000',
        opacity: 0.7,
    },
    viewContainerModalScheduling: {
        backgroundColor: '#268596',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
    },
    viewItemModalScheduling: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10
    },
    viewProviderModalScheduling: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageProviderModalScheduling: {
        width: 55,
        height: 55,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#999999',
        marginRight: 15
    },
    textNameProviderModalScheduling: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewServiceModalScheduling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewServiceNameModalScheduling: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewServicePriceModalScheduling: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewMonthModalScheduling: {
        flexDirection: 'row',
    },
    buttonMonthPrevModalScheduling: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    viewMonthInfoModalScheduling: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMonthInfoModalScheduling: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonMonthNextModalScheduling: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    scrollDayListModalScheduling: {
        flexGrow : 1, 
        //justifyContent : 'center'
    },

    buttonDayModalScheduling: {
        width: 75, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10, 
        marginTop: 5, 
        paddingBottom: 5, 
        borderColor: '#4EADBE'
    },
    textButtonDayWeekModalScheduling: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    textButtonDayModalScheduling: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    buttonHourModalScheduling: { 
        width: 75,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
        paddingBottom: 5,
    },
    textButtonHourModalScheduling: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },


    buttonSchedulingModalScheduling: {
        borderColor: '#FFFFFF',
        borderWidth: 3,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButtonSchedulingModalScheduling: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default styles;