import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";

const choptat = ({ route, navigation }) => {

    const { totalbit } = route.params;

    var code = [`
#include <xc.h>
#define _XTAL_FREQ 4000000
#include <pic.h>

void main(void){
    unsigned char i, temp;
    ANSEL = ANSELH = 0;
    TRISD = 0x00;
    while(1){
        PORTD = 0x00;
        __delay_ms(500);
        temp = 0x${totalbit};
        PORTD = temp;
        __delay_ms(500);
}
}
    `];

    return (
        <View style={styles.container}>
            <ResultcodeScreen code={code}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',

    },
})

export default choptat;