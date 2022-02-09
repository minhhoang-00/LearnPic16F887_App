import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, FlatList, TouchableHighlight, StatusBar, TextInput } from "react-native";

const {width, height} = Dimensions.get('window');

const Itempwm = ({ navigation }) => {

    useEffect(() => {
        calculatevalue();
    })

    const [fpwm, setfpwm] = useState(null);
    const [D, setD] = useState(null);
    const [fosc, setfosc] = useState(null);
    const [pre, setpre] = useState(null);
    const [Pre2, setPre2] = useState("0");
    const [CCPR1L, setCCP1L] = useState("0");
    const [CCP1CON, setCCP1CON] = useState("0xC0");
    const [DC1B1, setDC1B1] = useState("0");
    const [DC1B0, setDC1B0] = useState("0");
    const [TPWM, setTPWM] = useState(0);
    const [PW, setPW] = useState(0);
    const [E, setE] = useState(0);

    const calculatevalue = () => {
        setTPWM(1 / fpwm);
        setPre2((((TPWM * fosc) / (4 * pre)) - 1).toString());
        setPW((D * TPWM) / 100);
        setE((PW * fosc) / pre);
        setCCP1L((E / 4).toString());
        if (E % 4 == 0) {
            setDC1B1("0");
            setDC1B0("0");
        } else if (E % 4 == 1) {
            setDC1B1("0");
            setDC1B0("1");
        } else if (E % 4 == 2) {
            setDC1B1("1");
            setDC1B0("0");
        } else if (E % 4 == 3) {
            setDC1B1("1");
            setDC1B0("1");
        }
    }

    return (
        <ScrollView style={styles.contain}>
            <StatusBar backgroundColor="#ffcc4f" />
            <View style={styles.calculatearea}>
                <Text style={styles.text1}>Tính Toán Giá Trị Thanh Ghi PWM</Text>
                <Text style={{ color: 12, color: '#111111', marginTop: '-2%' }}>Nhập Giá Trị Tương Ứng</Text>
                <View style={styles.valueinput}>
                    <TextInput
                        style={styles.textinput}
                        keyboardType="numeric"
                        value={fpwm}
                        onChangeText={setfpwm}
                        placeholder="fpwm"
                    />
                    <TextInput
                        style={styles.textinput}
                        keyboardType="numeric"
                        value={D}
                        onChangeText={setD}
                        placeholder="D%"
                    />
                    <TextInput
                        style={styles.textinput}
                        keyboardType="numeric"
                        value={fosc}
                        onChangeText={setfosc}
                        placeholder="fosc"
                    />
                    <TextInput
                        style={styles.textinput}
                        keyboardType="numeric"
                        value={pre}
                        onChangeText={setpre}
                        placeholder="Pre"
                    />
                </View>
                <Text style={styles.text2}>Kết Quả</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: '2.5%',
                    color: '#111111',
                }}>
                    <Text style={{color: '#111111', marginRight: '15%', marginLeft: '20.5%'}}>PR2</Text>
                    <Text style={{color: '#111111', marginRight: '8%',}}>CCPR1L</Text>
                    <Text style={{color: '#111111', marginRight: '15%',}}>CCP1CON</Text>
                </View>
                <View style={styles.result1}>
                    <View style={styles.output}>
                        <Text style={styles.textresult1}>{Pre2}</Text>
                    </View>
                    <View style={styles.output}>
                        <Text style={styles.textresult1}>{CCPR1L}</Text>
                    </View>
                    <View style={styles.output}>
                        <Text style={styles.textresult1}>{CCP1CON}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    color: '#111111',
                }}>
                    <Text style={{color: '#111111', marginRight: '13%', marginLeft: '1%'}}>DC1B1</Text>
                    <Text style={{color: '#111111',}}>DC1B0</Text>
                </View>
                <View style={styles.result2}>
                    <View style={styles.output}>
                        <Text style={styles.textresult1}>{DC1B1}</Text>
                    </View>
                    <View style={styles.output}>
                        <Text style={styles.textresult1}>{DC1B0}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.codearea}>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#ffcc4f',
    },
    calculatearea: {
        width: '90%',
        height: '90%',
        backgroundColor: '#ffffff',
        marginLeft: '5%',
        borderRadius: 20,
        alignItems: 'center',
        paddingBottom: '11%',
        paddingTop: '6%',
        marginTop: '5%',
    },
    text1: {
        color: '#111111',
        fontSize: 17,
        marginBottom: '7%',
    },
    text2: {
        color: 12,
        color: '#111111',
        marginTop: '4%',
    },
    valueinput: {
        flexDirection: 'row',
        marginTop: '4%',
    },
    textinput: {
        width: '20%',
        borderWidth: 1,
        paddingVertical: '0.001%',
        marginHorizontal: '2%',
    },
    result1: {
        flexDirection: 'row',
        marginTop: '2%',
        color: '#111111',
    },
    result2: {
        flexDirection: 'row',
        marginTop: '2%',
    },
    output: {
        width: '20%',
        paddingVertical: '1.4%',
        borderWidth: 1,
        borderColor: '#111111',
        justifyContent: 'center',
        paddingLeft: 3,
        marginHorizontal: '3%',
    },
    textresult1: {
        color: '#111111',
    },
    codearea: {
        width: '90%',
        backgroundColor: '#ffffff',
        marginLeft: '5%',
    }
})

export default Itempwm;