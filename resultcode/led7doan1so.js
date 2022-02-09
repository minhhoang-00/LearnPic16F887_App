import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import ResultcodeScreen from "../CustomComponent/resultcodeScreen";

const led7doan1so = ({ route, navigation }) => {

    const { totalbit, chara } = route.params;
   
    var code = [`
#include <xc.h>
#define _XTAL_FREQ 4000000
#include <pic.h>

unsigned char a[] = ${chara};

void main(void){
    unsigned char i, j;
    ANSEL = ANSELH = 0;
    TRISD = TRISC = 0x00;
while(1){
    for (j = 0; j < ${totalbit}; j++){
            PORTC = a[0];
            PORTD = a[j];
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

export default led7doan1so;