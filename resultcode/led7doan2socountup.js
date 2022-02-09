import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";

const led7doan2socountup = ({ route, navigation }) => {

    const { start, end, unitlow, unithigh, chara } = route.params;

    var code = [`
#include <xc.h>
#define _XTAL_FREQ 4000000
#include <pic.h>

unsigned char a[] = ${chara};

void main(void){
    unsigned char i, j, z;
    ANSEL = ANSELH = 0;
    TRISD = TRISC = 0x00;
    for (i = ${start}; i <= ${end}; i++) {
        if (i == ${start}){
            for (z = ${unitlow}; z < 10; z++) {
                PORTC = a[${start}];
                PORTD = a[z];
                __delay_ms(500);  
            }
            continue;
        }
        if (i == ${end}){
            for (z = 0; z <= ${unithigh}; z++) {
                PORTC = a[${end}];
                PORTD = a[z];
                __delay_ms(500);  
            }  
            break;
        }
        for (j = 0; j < 10; j++) {
        PORTC = a[i];
        PORTD = a[j];
        __delay_ms(500);
    }
} 
}
    `];

    return (
        <View style={styles.container}>
            <ResultcodeScreen code={code} />
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

export default led7doan2socountup;