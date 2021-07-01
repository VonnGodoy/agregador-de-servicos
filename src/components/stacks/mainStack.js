import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from './mainTab';
import Preload from '../../screens/Preload/preload';
import SignIn from '../../screens/SignIn/signIn';
import SignUp from '../../screens/SignUp/signUp';
import Provider from '../../screens/Provider/provider';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Preload"
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Preload" component={Preload} /> 
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Provider" component={Provider} />
    </Stack.Navigator>
);