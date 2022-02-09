import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";


const Sangdon = ({ route, navigation }) => {

    const { temp, countled, navigate } = route.params;
    var code = [`
#define _XTAL_FREQ 4000000
#include <pic.h>

void main(void){
    unsigned char i, j, temp, temp2, sum;
    ANSEL = ANSELH = 0;
    TRISD = 0x00;
    PORTD = 0;
    __delay_ms(300);
while(1){
    temp = 0;
    for(i = ${countled}; i > 0; i--){
        temp2 = 0x${temp};
        for (j = 0; j < i; j++){
            sum = temp + temp2;
            PORTD = sum;
            __delay_ms(300);
            temp2 = temp2 ${navigate} 1;
        }
        temp = sum;
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

export default Sangdon;