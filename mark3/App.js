import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import HomeScreen from './Screens/Home';
import SettingScreen from './Screens/Setting';
import helpScreen from './Screens/help';
import ilanlarimScreen from './Screens/ilanlarim';
import ilanverScreen from './Screens/ilanver';
import mesajlarimScreen from './Screens/mesajlarim';
import profileScreen from './Screens/profile';
import siparisScreen from './Screens/siparis';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Ana Sayfa" component={HomeScreen}/>
        <Drawer.Screen name="İlan Ver" component={ilanverScreen} />
        <Drawer.Screen name="İlanlarım" component={ilanlarimScreen} />
        <Drawer.Screen name="Mesajlarım" component={mesajlarimScreen} />
        <Drawer.Screen name="Siparişlerim" component={siparisScreen} />
        <Drawer.Screen name="Ayarlar" component={SettingScreen} />
        <Drawer.Screen name="Profilim" component={profileScreen} />
        <Drawer.Screen name="Yardım" component={helpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>    
  );
}


