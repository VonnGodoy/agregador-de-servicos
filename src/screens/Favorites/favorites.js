import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { SafeAreaView ,ScrollView , ActivityIndicator, View , Text} from 'react-native';

import Api from '../../services/Api';
import Mock from '../../Mock';
import styles from './favorites.styles';

import SimpleItem from '../../components/simpleItem/simpleItem';

export default () => {

    const [loading, setLoading] = useState(false);
    const [listFavorites, setListFavorites] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    const getFavorites = async () => {
        setLoading(true);
        setListFavorites([]);

        /*let res = await Api.getFavorites();
        if(res.error == '') {
            setListFavorites(res.data);
        } else {
            alert(res.error);
        }*/
        setListFavorites(Mock.listProviders);

        setLoading(false);
    }

    useEffect(()=>{
        getFavorites();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getFavorites();
    }


    return (
        <SafeAreaView style={styles.safeAreaViewFavorites}>
            <ScrollView style={styles.scrollViewFavorites}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                <View style={styles.viewHeaderFavorites}>
                    <Text style={styles.textHeaderFavorites}>Meus Favoritos</Text>
                </View>
                {loading &&
                    <ActivityIndicator style={styles.activityIndicatorFavorites} size="large" color="#FFFFFF" />
                }
                <View style={styles.viewProviderFavorites}>
                    {listFavorites.map((item, k)=>(
                        <SimpleItem key={k} provider={item} router={'Provider'} />
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}