import React , { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text, Modal, View , Image, ScrollView} from "react-native";
import styles from './modalScheduling.styles';
import ExpandIcon from '../../assets/expand.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import Api from '../../services/Api';

export default ({show, setShow, provider, service}) => {

    const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

    const weeks = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    const navigation = useNavigation();

    const [validacaoUseEffectMonth, setValidacaoUseEffectMonth] = useState(0);
    const [validacaoUseEffectDay, setValidacaoUseEffectDay] = useState(0);
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear());
    const [monthSelected, setMonthSelected] = useState(new Date().getMonth());
    const [daySelected, setDaySelected] = useState(new Date().getDate());

    const [hourSelected, setHourSelected] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    useEffect(() =>{

        if(validacaoUseEffectMonth !== monthSelected){
            setValidacaoUseEffectMonth(monthSelected);
           
            if(provider.available){

                let daysInMonth =  new Date(yearSelected, monthSelected + 1, 0).getDate();
                let newListDay = [];
    
                for(let i=1 ; i <= daysInMonth ; i++){
    
                    let date = new Date(yearSelected, monthSelected , i);
    
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    let day =   date.getDate();
    
                    month = month < 10 ? '0'+month : month;
                    day = day < 10 ? '0'+day : day;
                    let selDate =  year +'-'+ month +'-'+ day;
    
                    let availability = provider.available.filter(e => e.date === selDate);
                
                    if(availability.length > 0 ){
                        newListDay.push({
                            status: availability.length > 0 ? true : false,
                            weekDay: weeks[ date.getDay() ],
                            day: i
                        });
                    }
                }
    
                setListDays(newListDay);

                setListHours([]);
                //setDaySelected(0);
                setHourSelected(null);
            }
        }

    }),[monthSelected];

    useEffect(() =>{

        if(daySelected && daySelected > 0 && validacaoUseEffectDay !== daySelected){
            setValidacaoUseEffectDay(daySelected);

            let daysInMonth =  new Date(yearSelected, monthSelected , daySelected).getDate();

            for(let i=1 ; i <= daysInMonth ; i++){

                let date = new Date(yearSelected, monthSelected , i);

                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day =   date.getDate();

                month = month < 10 ? '0'+month : month;
                day = day < 10 ? '0'+day : day;
                let selDate =  year +'-'+ month +'-'+ day;

                let availability = provider.available.filter(e => e.date === selDate);
            
                if (availability.length > 0  ){
                    setListHours(availability[0].hours);
                }
            }
            setHourSelected(null);
        }
        
    }),[daySelected];

    const handleCloseButton = () => {
        setShow(false);
    }

    const handleSchedulingButton = async () => {
        let error = false;

        if(provider.id && service != null){

            if(yearSelected == 0){
                error = true;
                alert('Obrigatorio Selecionar o Ano');
            }
            if(monthSelected == 0){
                error = true;
                alert('Obrigatorio Selecionar o Mes');
            }
            if(daySelected == 0){
                error = true;
                alert('Obrigatorio Selecionar o Dia');
            }
            if(hourSelected == null){
                error = true;
                alert('Obrigatorio Selecionar um Horario');
            }
        }
        if(!error){
            let appointment = {
                provider: provider,
                service: service,
                date: yearSelected +'-'+ monthSelected +'-'+ daySelected,
                hour: hourSelected
            }

            //let resp = await Api.setAppointment(appointment);

            //if(resp.error == ''){
                setShow(false);
                navigation.navigate('Appointments');
            //} else {
              //  alert(resp.error);
            //}
        }
    }

    const handlePrevMontClick = () => {
        let mountDate = new Date(yearSelected, monthSelected, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);

        setDaySelected(0);
        setMonthSelected(mountDate.getMonth());
        setYearSelected(mountDate.getFullYear());
    }

    const handleNextMontClick = () => {
        let mountDate = new Date(yearSelected, monthSelected, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);

        setDaySelected(0);
        setMonthSelected(mountDate.getMonth());
        setYearSelected(mountDate.getFullYear());

    }

    return (
        <Modal style={styles.modalScheduling}
            transparent={true}
            visible={show}
            animationType="slide"
        >

            <View style={styles.viewModalScheduling}>

                <View style={styles.viewContainerModalScheduling }>
                    
                    <TouchableOpacity onPress={handleCloseButton}>
                        <ExpandIcon width="40" height="40" fill="#000000"/>
                    </TouchableOpacity>

                    <View style={styles.viewItemModalScheduling}>
                        <View style={styles.viewProviderModalScheduling}>
                            <Image style={styles.imageProviderModalScheduling} source={{ uri: provider.avatar }}/>
                            <Text style={styles.textNameProviderModalScheduling}>{provider.name}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.viewItemModalScheduling}>
                        <View style={styles.viewServiceModalScheduling}>
                            <Text style={styles.viewServiceNameModalScheduling}>{service?.name}</Text>
                            <Text style={styles.viewServicePriceModalScheduling}>R$ {service?.price.toFixed(2)}</Text> 
                        </View>
                    </View>

                    <View style={styles.viewItemModalScheduling}>
                        <View style={styles.viewMonthModalScheduling}>
                            <TouchableOpacity style={styles.buttonMonthPrevModalScheduling} onPress={handlePrevMontClick}> 
                                <NavPrevIcon width="35" height="35" fill="#000000"/>
                            </TouchableOpacity>
                            <View style={styles.viewMonthInfoModalScheduling}>
                                <Text style={styles.textMonthInfoModalScheduling}>{months[monthSelected]} {yearSelected}</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonMonthNextModalScheduling} onPress={handleNextMontClick}>
                                <NavNextIcon width="35" height="35" fill="#000000"/>
                            </TouchableOpacity>
                        </View>
                        <ScrollView  contentContainerStyle={styles.scrollDayListModalScheduling}
                                horizontal={true} showsHorizontalScrollIndicator={false}>
                            { listDays.map( (item, key) => (
                               
                                <TouchableOpacity key={key} 
                                        style={{
                                            width: 45, justifyContent: 'center', alignItems: 'center',
                                            borderRadius: 10, marginTop: 5,  paddingBottom: 5, 
                                            borderWidth: 3,
                                            borderColor: item.day === daySelected ? '#4EADBE' : '#999999', 
                                            opacity: !item.status ? 0.5 : 1
                                            }}
                                        disabled={!item.status} onPress={() => setDaySelected(item.day)}>

                                    <Text style={{
                                            fontSize: 16, fontWeight: 'bold',
                                            color: item.day === daySelected ? '#4EADBE': '#000000'}}>{item.weekDay}</Text> 
                                    <Text style={{
                                            fontSize: 16, fontWeight: 'bold',
                                            color: item.day === daySelected ? '#4EADBE': '#000000'}}>{item.day}</Text> 
                                </TouchableOpacity>
                                
                            ))}
                        </ScrollView>
                    </View>

                    {daySelected > 0 && listHours.length > 0 &&
                        <View style={styles.viewItemModalScheduling}>
                            <ScrollView style={styles.scrollDayListModalScheduling}
                                horizontal={true} showsHorizontalScrollIndicator={false}>
                                { listHours.map( (item, key) => (
                                    <TouchableOpacity key={key}
                                        style={{
                                            width: 75, height: 40, justifyContent: 'center', alignItems: 'center',
                                            borderRadius: 10, marginTop: 5, paddingBottom: 5, 
                                            borderWidth: 3 ,
                                            borderColor: item === hourSelected ? '#4EADBE' : '#999999', 
                                           }}
                                        onPress={() => setHourSelected(item)}>

                                        <Text style={{
                                            fontSize: 16, fontWeight: 'bold',
                                            color: item === hourSelected ? '#4EADBE': '#000000'}}>{item}</Text> 
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    }


                    <TouchableOpacity style={styles.buttonSchedulingModalScheduling} onPress={handleSchedulingButton}> 
                        <Text style={styles.textButtonSchedulingModalScheduling}> Agendar </Text> 
                    </TouchableOpacity>

                </View>

            </View >

        </Modal>
    );
}
