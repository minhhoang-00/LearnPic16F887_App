import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import MainItem from '../item/MainItem';
import pdfchuong1 from '../pdfscreen/pdfchuong1';
import pdfchuong2 from '../pdfscreen/pdfchuong2';
import pdfchuong3 from '../pdfscreen/pdfchuong3';
import pdfchuong4 from '../pdfscreen/pdfchuong4';
import pdfchuong5 from '../pdfscreen/pdfchuong5';
import pdfchuong6 from '../pdfscreen/pdfchuong6';
import pdfchuong7 from '../pdfscreen/pdfchuong7';
import pdfchuong8 from '../pdfscreen/pdfchuong8';
import Itemleddon from '../item/Itemleddon';
import Choptat from '../resultcode/chottat'
import Sangdan from '../resultcode/Sangdan';
import Sangdon from '../resultcode/Sangdon';
import Sangduoi from '../resultcode/Sangduoi';
import Itemled7doan from '../item/itemled7doan';
import Led7doan1so from '../resultcode/led7doan1so';
import Led7doan2so2countup from '../resultcode/led7doan2socountup';
import Led7doan2socountdown from '../resultcode/led7doan2socountdown';
import Itemlcd from '../item/itemlcd';
import Itempwm from '../item/Itempwm';

const Stack = createNativeStackNavigator();

const Tab = () => {
    return(
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="MainItem" component={MainItem}></Stack.Screen>
            <Stack.Screen name="pdfchuong1" component={pdfchuong1}></Stack.Screen>
            <Stack.Screen name="pdfchuong2" component={pdfchuong2}></Stack.Screen>
            <Stack.Screen name="pdfchuong3" component={pdfchuong3}></Stack.Screen>
            <Stack.Screen name="pdfchuong4" component={pdfchuong4}></Stack.Screen>
            <Stack.Screen name="pdfchuong5" component={pdfchuong5}></Stack.Screen>
            <Stack.Screen name="pdfchuong6" component={pdfchuong6}></Stack.Screen>
            <Stack.Screen name="pdfchuong7" component={pdfchuong7}></Stack.Screen>
            <Stack.Screen name="pdfchuong8" component={pdfchuong8}></Stack.Screen>
            <Stack.Screen name="Itemleddon" component={Itemleddon}></Stack.Screen>
            <Stack.Screen name="Choptat" component={Choptat}></Stack.Screen>
            <Stack.Screen name="Sangdan" component={Sangdan}></Stack.Screen>
            <Stack.Screen name="Sangdon" component={Sangdon}></Stack.Screen>
            <Stack.Screen name="Sangduoi" component={Sangduoi}></Stack.Screen>
            <Stack.Screen name="itemled7doan" component={Itemled7doan}></Stack.Screen>
            <Stack.Screen name="Led7doan1so" component={Led7doan1so}></Stack.Screen>
            <Stack.Screen name="Led7doan2socountup" component={Led7doan2so2countup}></Stack.Screen>
            <Stack.Screen name="Led7doan2socountdown" component={Led7doan2socountdown}></Stack.Screen>
            <Stack.Screen name="Itemlcd" component={Itemlcd}></Stack.Screen>
            <Stack.Screen name="Itempwm" component={Itempwm}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Tab;