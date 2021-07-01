import React from 'react';
import { View, TouchableOpacity } from "react-native";

import styles from './customTabBar.styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.tabView}>
            <TouchableOpacity style={styles.tabButtom} onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabButtom} onPress={()=>goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabButtomCenter} onPress={()=>goTo('Appointments')}>
                <TodayIcon width="32" height="32" fill="#4EADBE" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabButtom} onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabButtom} onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}