import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, ScrollView, View, Image, ActivityIndicator, Text } from "react-native";

import Stars from '../../components/stars/stars';
import ModalScheduling from '../../components/modalScheduling/modalScheduling';
import BottomSheet from '../../components/customBottomSheet/customBottomSheet';


import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import Api from '../../services/Api';
import styles from './provider.styles';
import { useProviderContext } from '../../contexts/ProviderContext';

export default () => {
    const navigation = useNavigation();

    const { getProviderContext ,setProviderContext } = useProviderContext();

    const [loading, setLoading ] = useState(false);
    const [favorited, setFavorited ] = useState(false);
    const [itemSeletcted, setItemSelected ] = useState(null);
    const [showModal, setShowModal ] = useState(false);
    const [showBottomSheet, setShowBottomSheet ] = useState(false);
    const [messageErro, setMessageErro ] = useState('');

    const getBarberInfo = async () =>{
        setLoading(true);

        let json = await Api.getBarber(getProviderContext().id);

        if(json.error == ''){
            setProviderContext(json.data);
            setFavorited(json.data.favorited);
        } else {
            setMessageErro(json.error);
            setShowBottomSheet(true);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getBarberInfo();
    },[]);

    const handleBackButton = async () => {
        navigation.goBack();
    }

    const handleChooseButton = (item) => {

       setItemSelected(item);
       setShowModal(true);
    }

    const handleFavClick = async () => {
        setFavorited(!favorited);
        Api.setFavorite(getProviderContext().id);
    }

    return (

        <SafeAreaView style={styles.safeAreaViewProvider}>
            
            <TouchableOpacity style={styles.buttonBackProvider} onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFFFFF"/>
            </TouchableOpacity>

            <ScrollView>
            
                { getProviderContext().photos && getProviderContext().photos.length > 0 ?
                    <Swiper
                        style={{height:240}}
                        dot={<View style={styles.viewSwiperDotProvider} />}
                        activeDot={<View style={styles.viewSwiperDotActiveProvider}/>}
                        paginationStyle={{top:15, bottom:null, right:15, left:null}}
                        autoplay={true}
                    >
                        {getProviderContext().photos.map((item,key) =>(

                            <View style={styles.viewSwiperItemProvider} key={key}>
                                <Image style={styles.imageSwiperProvider} source={{uri: item.url}} resizeMode="cover"/> 
                            </View>
                        
                        ))}
                    </Swiper>
                :
                    <View style={styles.viewSwiperFakeProvider}></View>
                }

                <SafeAreaView style={styles.safeAreaViewInfoProvider}>

                    <View style={styles.viewInfoContainerProvider}>
                        <Image style={styles.imageAvatarProvider} source={{ uri:getProviderContext().avatar }}/>
                        <View style={styles.viewInfoProvider}>
                            <Text>{getProviderContext().name}</Text>
                            <Stars stars={getProviderContext().stars} showNumber={true}/>
                        </View>
                        <TouchableOpacity style={styles.buttonFavProvider} onPress={handleFavClick}>
                            { favorited ?
                                <FavoriteFullIcon width="24" height="24" fill="#FF0000"/>
                            :
                                <FavoriteIcon width="24" height="24" fill="#FF0000"/>
                            }
                        </TouchableOpacity>
                    </View>

                    { loading && 
                        <ActivityIndicator size="large" color="#000000" />
                    }

                    {  getProviderContext().services &&
                        <View style={styles.viewServicesProvider}>
                        
                            <Text style={styles.textTitleServicesProvider}> Lista de Serviços</Text>

                            { getProviderContext().services.map((item, key) =>(
                                <View style={styles.viewItemServicesProvider} key={key}>
                                    <View style={styles.viewInfoItemServicesProvider}>
                                        <Text style={styles.textNameServicesProvider}>{item.name}</Text>
                                        <Text style={styles.textPriceServicesProvider}>R$ {item.price.toFixed(2)}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.buttonChooseProvider} onPress={()=>handleChooseButton(item)}>
                                        <Text style={styles.textButtonChooseProvider}>Agendar</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    }

                    {  getProviderContext().testimonials &&  getProviderContext().testimonials.length > 0 &&
                        <View style={styles.viewTestimonialProvider}>
                            <Swiper
                                style={{height:120}}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                                nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                            >
                            
                            {getProviderContext().testimonials.map((item,key) =>(

                                <View style={styles.viewSwiperItemTestimonialProvider} key={key}>
                                    <View style={styles.viewSwiperInfoItemTestimonialProvider}>
                                        <Text style={styles.textSwiperItemNameTestimonialProvider}>{item.name}</Text>
                                        <Stars stars={item.rate} showNumber={false}/>
                                    </View>
                                    <Text style={styles.textSwiperItemTextTestimonialProvider}>{item.body}</Text>
                                </View>

                            ))}
                            </Swiper>


                        </View>
                    }

                </SafeAreaView>

            </ScrollView>
            { itemSeletcted && showModal &&

                <ModalScheduling
                    show={showModal}
                    setShow={setShowModal}
                    provider={getProviderContext()}
                    service={itemSeletcted}    
                />
            }
            { showBottomSheet &&
                <BottomSheet
                    visible={showBottomSheet}
                    setVisible={setShowBottomSheet}
                    message={messageErro}
                    type={'alert'}
                />

            }
        </SafeAreaView>
    );

}