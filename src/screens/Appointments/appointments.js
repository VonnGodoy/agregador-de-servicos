import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { SafeAreaView ,ScrollView , ActivityIndicator, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './appointments.styles';
import Api from '../../services/Api';
import Mock from '../../Mock';

export default () => {

    const [loading, setLoading] = useState(false);
    const [listAppointments, setListAppointments] = useState([]);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(()=>{
        getAppointments();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getAppointments();
    }

    const getAppointments = async () => {
        setLoading(true);
        setListAppointments([]);

        setListAppointments(Mock.listAppointments);
        
        /*
        let res = await Api.getAppointments();

        if(res.error == '') {
            setListAppointments(res.data);
        } else {
            alert(res.error);
        }*/

        setLoading(false);
    }

    const handleCancelClick = (item) => {


    }
    return (
        <SafeAreaView style={styles.safeAreaViewAppointments}>

            <ScrollView style={styles.scrollAppointments}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View style={styles.viewHeaderAppointments}>
                    <Text style={styles.textHeaderAppointments}>Meus Agendamentos</Text>
                </View>

                {loading &&
                    <ActivityIndicator style={styles.activityIndicatorAppointments} size="large" color="#FFFFFF" />
                }
                { listAppointments.map( (item, key) => (
                    <View style={styles.viewAppointments} key={key}>
                        <View style={styles.viewProviderAppointments}>
                            <Image style={styles.imageProviderAppointments} source={{ uri: item?.provider?.avatar }}/>
                            <Text style={styles.textNameProviderAppointments}>{item.provider?.name}</Text>
                        </View>
                        <View style={styles.viewServiceAppointments}>
                            <Text style={styles.textServiceNameAppointments}>{item?.service?.name}</Text>
                            <Text style={styles.textServicePriceAppointments}>R$ {item?.service?.price.toFixed(2)}</Text> 
                        </View>
                        <View style={styles.viewSchedulingAppointments}>
                            <TouchableOpacity style={styles.buttonDateSchedulingAppointments} disabled={true}>
                                <Text style={styles.textButtonDateSchedulingAppointments}>{item?.date}</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonHourSchedulingAppointments} disabled={true}>
                                <Text style={styles.textButtonHourSchedulingAppointments}>{item?.hour}</Text> 
                            </TouchableOpacity>
                        </View>  
                        <TouchableOpacity style={styles.buttonCalncelSchedulingAppointments} onPress={ () => handleCancelClick(item)}>
                            <Text style={styles.textButtonCalncelSchedulingAppointments}>Cancelar</Text> 
                        </TouchableOpacity>      
                    </View>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
}
