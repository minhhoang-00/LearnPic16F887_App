import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";


const led7doan2socountdown = ({ route, navigation }) => {

    const {start, end, unitlow, unithigh, chara, charb } = route.params;
   
    var code = [`
#include <xc.h>
#define _XTAL_FREQ 4000000
#include <pic.h>
    
unsigned char a[] = ${chara};
unsigned char b[] = ${charb};
    
void main(void){
    unsigned char i, j, z;
    ANSEL = ANSELH = 0;
    TRISD = TRISC = 0x00;
    for (i = ${start}; i >= ${end}; i--) {
        if (i == ${end}){
            for (z = 0; z <= ${unitlow+1}; z++) {
                PORTC = a[${end}];
                PORTD = b[z];
                __delay_ms(500);  
            }
            break;
        }
        if (i == ${start}){
            for (z = ${unithigh+1}; z < 10; z++) {
                PORTC = a[${start}];
                PORTD = b[z];
                __delay_ms(500);  
            }
            continue;
        }
        for (j = 0; j < 10; j++) {
        PORTC = a[i];
        PORTD = b[j];
        __delay_ms(500);
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

export default led7doan2socountdown;