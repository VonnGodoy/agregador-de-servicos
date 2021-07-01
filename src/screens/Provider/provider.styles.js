import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    safeAreaViewProvider: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scrollSimplePerfil: {
        flex: 1,
    },
    viewSwiperDotProvider: {
        width:10,
        height:10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        margin: 3
    },
    viewSwiperDotActiveProvider: {
        width: 10,
        height: 10,
        backgroundColor: '#000000',
        borderRadius: 5,
        margin: 3
    },
    viewSwiperItemProvider: {
        flex: 1,
        backgroundColor: '#63C2D1'
    },
    ImageSwiperProvider: {
        width: '100%',
        height: 240
    },
    viewSwiperFakeProvider: {
        height: 240,
        backgroundColor: '#63C2D1'
    },
    safeAreaViewInfoProvider: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
        marginTop: -50,

    },
    viewInfoContainerProvider: {
        flexDirection: 'row',
        marginTop: -30
    },
    imageAvatarProvider: {
        width: 110,
        height: 110,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 20,
        borderWidth: 3,
        borderColor: '#999999'
    },
    viewInfoProvider: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    textInfoNameProvider: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonFavProvider: {
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#999999',
        borderRadius: 20,
        marginRight: 20,
        marginLeft: 20,
        marginTop : 20
    },
    buttonBackProvider: {
        position: 'absolute',
        marginLeft: 0,
        marginTop: 0,
        zIndex: 9
    },
    viewServicesProvider: {
       marginTop: 30,
       alignItems: 'center'
    },
    textTitleServicesProvider: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#268596',
        marginLeft: 30,
        marginBottom: 20
    },
    viewItemServicesProvider: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    viewInfoItemServicesProvider: {
        flex: 1
    },
    textNameServicesProvider: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#268596'
    },
    textPriceServicesProvider: {
        fontSize: 14,
        color: '#268596'
    },
    buttonChooseProvider: {
        borderColor: '#4EADBE',
        borderWidth: 3,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 15
    },
    textButtonChooseProvider: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EADBE'
    },
    viewTestimonialProvider: {
        marginTop: 30,
      
    },
    viewSwiperItemTestimonialProvider:{
        backgroundColor: '#268596',
        padding: 15,
        borderRadius: 10,
        height: 120,
        justifyContent: 'center',
        marginLeft: 40,
        marginRight: 40 
    },
    viewSwiperInfoItemTestimonialProvider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    textSwiperItemNameTestimonialProvider: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'

    },
    textSwiperItemTextTestimonialProvider: {
        color: '#FFFFFF',
        fontSize: 13,
    },
});

export default styles;