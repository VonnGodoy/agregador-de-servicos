import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl , SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../services/Api';

import styles from './seach.styles';

import SimpleItem from '../../components/simpleItem/simpleItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [watchId ,setWatchId] = useState(null);

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    const clearLocation = () => {
            setLatitude(null);
            setLongitude(null);
    }

    const handleLocationFinder = async () => {
        clearLocation();

        if(Platform.OS === 'ios'){
            getLocation();
        } else {
            const garanted = requestMultiple([
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION], 
            ).then((status) => {
                const statusFineLocation = status[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]; 
                const statusBackLocation = status[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION];
            
            
                if(Platform.Version < 29 ){
                    if (statusFineLocation == 'granted') {
                        getLocation();
                      } else {
                        alert('Usuário não aceitou solicitação de uso do GPS');
                      }
                }

                if (statusFineLocation == 'granted' && statusBackLocation == 'granted') {
                    getLocation();
                  } else {
                    setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                }


            });
        }

        const getLocation = () => {
            Geolocation.getCurrentPosition((position)=>{
                    setLatitude(JSON.stringify(position.coords.latitude));
                    setLongitude(JSON.stringify(position.coords.longitude));
                },
                (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
            );
            const watchId = Geolocation.getCurrentPosition((position)=>{
                setLatitude(JSON.stringify(position.coords.latitude));
                setLongitude(JSON.stringify(position.coords.longitude));
            });
            setWatchId(watchId);
        }



        /*if(result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            });

        }*/
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(latitude) {
            lat = latitude;
        }
        if(longitude) {
            lng = longitude;
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        handleLocationFinder()
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        clearLocation();
        getBarbers();
    }

    return (
        <SafeAreaView style={styles.safeAreaViewSearch}>
            <ScrollView style={styles.scrollViewSearch}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
                <View style={styles.viewHeaderSearch}>
                    <Text style={styles.textHeaderTitleSearch} >Encontre o seu barbeiro favorito</Text>
                </View>

                <View style={styles.viewLocationSearch}>
                    <TextInput style={styles.textInputLocationSearch}
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <TouchableOpacity style={styles.buttonLocationSearch} onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {loading &&
                    <ActivityIndicator style={styles.activityIndicatorSearch} size="large" color="#FFFFFF" />
                }
                <View style={styles.viewListProvidersSearch}>
                    {list.map((item, k)=>(
                        <SimpleItem key={k} provider={item} router={'Provider'} />
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}