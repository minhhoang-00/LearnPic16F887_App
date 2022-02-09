import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";

const Sangduoi = ({ route, navigation }) => {

    const { temp, countled, navigate } = route.params;
    var code = [`
#include <xc.h>
#define _XTAL_FREQ 4000000
#include <pic.h>

void main(void){
    unsigned char i, temp;
    ANSEL = ANSELH = 0;
    TRISD = 0x00;
    PORTD = 0;
    __delay_ms(300);
    while(1){
        temp = 0x${temp};
        for(i = 0 ;i < ${countled}; i++){
            PORTD = temp;
            __delay_ms(300);
            temp = temp ${navigate} 1;
}
}
}
    `];

    return (
        <View style={styles.container}>
            <ResultcodeScreen code = {code}/>
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

export default Sangduoi;