import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../customTabBar/customTabBar';

import Home from '../../screens/Home/home';
import Search from '../../screens/Search/search';
import Appointments from '../../screens/Appointments/appointments';
import Favorites from '../../screens/Favorites/favorites';
import Profile from '../../screens/Profile/profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
        
    </Tab.Navigator>
);