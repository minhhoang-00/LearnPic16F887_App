import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableHighlight, Alert } from "react-native";


const { width, height } = Dimensions.get('window');

const Itemleddon = ({ navigation }) => {

    useEffect(() => {
        totalled();
        checkbit(bit1, bit2);
        gettemp();
    })

    var bit1 = 0;
    var bit2 = 0;
    var countled = 0;
    var navigate = '';

    const imagereset = require('../assets/image/itemleddon/resetbutton.png');
    const [address, setaddress] = useState('');
    const [temp, settemp] = useState('00');
    const [totalBit, settotalBit] = useState('00');
    const [stylebutton1, setstylebutton1] = useState(false);
    const [stylebutton2, setstylebutton2] = useState(false);
    const [stylebutton3, setstylebutton3] = useState(false);
    const [stylebutton4, setstylebutton4] = useState(false);
    const [stylebutton5, setstylebutton5] = useState(false);
    const [stylebutton6, setstylebutton6] = useState(false);
    const [led1, setled1] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check1, setcheck1] = useState('0')
    const [led2, setled2] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check2, setcheck2] = useState('0')
    const [led3, setled3] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check3, setcheck3] = useState('0')
    const [led4, setled4] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check4, setcheck4] = useState('0')
    const [led5, setled5] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check5, setcheck5] = useState('0')
    const [led6, setled6] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check6, setcheck6] = useState('0')
    const [led7, setled7] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check7, setcheck7] = useState('0')
    const [led8, setled8] = useState(require('../assets/image/itemleddon/leddontat.png'));
    const [check8, setcheck8] = useState('0')

    const changeled = (setled, check, setcheck) => {
        if (check.includes('0')) {
            setled(require('../assets/image/itemleddon/leddon.png'))
            setcheck('1');
        } else if (check.includes('1')) {
            setled(require('../assets/image/itemleddon/leddontat.png'))
            setcheck('0');
        }
    };

    const choisebuttonchoptat = () => {
        setstylebutton1(true);
        setstylebutton2(false);
        setstylebutton3(false);
        setstylebutton4(false);
    }

    const choisebutton = (setstylebuttonmain, setstylebutton2, setstylebutton3, setstylebutton4) => {
        setstylebuttonmain(true);
        setstylebutton2(false);
        setstylebutton3(false);
        setstylebutton4(false);
        resetbuttonrightleft();
    }

    const choiserightleftbutton = (setstylebuttonmain, setstylebutton) => {
        setstylebuttonmain(true);
        setstylebutton(false);
    }

    const reset = () => {
        setstylebutton1(false);
        setstylebutton2(false);
        setstylebutton3(false);
        setstylebutton4(false);
        setstylebutton5(false);
        setstylebutton6(false);
        setled1(require('../assets/image/itemleddon/leddontat.png'))
        setcheck1('0');
        setled2(require('../assets/image/itemleddon/leddontat.png'))
        setcheck2('0');
        setled3(require('../assets/image/itemleddon/leddontat.png'))
        setcheck3('0');
        setled4(require('../assets/image/itemleddon/leddontat.png'))
        setcheck4('0');
        setled5(require('../assets/image/itemleddon/leddontat.png'))
        setcheck5('0');
        setled6(require('../assets/image/itemleddon/leddontat.png'))
        setcheck6('0');
        setled7(require('../assets/image/itemleddon/leddontat.png'))
        setcheck7('0');
        setled8(require('../assets/image/itemleddon/leddontat.png'))
        setcheck8('0');
        settotalBit('00');
    }

    const resetbuttonrightleft = () => {
        setstylebutton5(false);
        setstylebutton6(false);
    }

    const checkbit = (bitone, bittwo) => {
        var bitcheck1 = '';
        var bitcheck2 = '';
        if (bitone == 10) {
            bitcheck1 = 'A';
        } else if (bitone == 11) {
            bitcheck1 = 'B'
        } else if (bitone == 12) {
            bitcheck1 = 'C'
        } else if (bitone == 13) {
            bitcheck1 = 'D'
        } else if (bitone == 14) {
            bitcheck1 = 'E'
        } else if (bitone == 15) {
            bitcheck1 = 'F'
        } else {
            bitcheck1 = String(bitone);
        }

        if (bittwo === 10) {
            bitcheck2 = 'A';
        } else if (bittwo == 11) {
            bitcheck2 = 'B'
        } else if (bittwo == 12) {
            bitcheck2 = 'C'
        } else if (bittwo == 13) {
            bitcheck2 = 'D'
        } else if (bittwo == 14) {
            bitcheck2 = 'E'
        } else if (bittwo == 15) {
            bitcheck2 = 'F'
        } else {
            bitcheck2 = String(bittwo);
        }

        settotalBit(bitcheck2 + bitcheck1);
    }

    const totalled = () => {
        if (check1.includes('1')) {
            bit1 += 1;
            countled += 1;
        } if (check2.includes('1')) {
            bit1 += 2;
            countled += 1;
        } if (check3.includes('1')) {
            bit1 += 4;
            countled += 1;
        } if (check4.includes('1')) {
            bit1 += 8;
            countled += 1;
        } if (check5.includes('1')) {
            bit2 += 1;
            countled += 1;
        } if (check6.includes('1')) {
            bit2 += 2;
            countled += 1;
        } if (check7.includes('1')) {
            bit2 += 4;
            countled += 1;
        } if (check8.includes('1')) {
            bit2 += 8;
            countled += 1;
        }
    }

    const gettemp = () => {
        if (stylebutton6 == true) {
            if (check1.includes('1')) {
                settemp('01');
            } else if (check2.includes('1')) {
                settemp('02');
            } else if (check3.includes('1')) {
                settemp('04');
            } else if (check4.includes('1')) {
                settemp('08');
            } else if (check5.includes('1')) {
                settemp('10');
            } else if (check6.includes('1')) {
                settemp('20');
            } else if (check7.includes('1')) {
                settemp('40');
            } else if (check8.includes('1')) {
                settemp('00');
            }
        } else if (stylebutton5 == true) {
            if (check8.includes('1')) {
                settemp('80');
            } else if (check7.includes('1')) {
                settemp('40');
            } else if (check6.includes('1')) {
                settemp('20');
            } else if (check5.includes('1')) {
                settemp('10');
            } else if (check4.includes('1')) {
                settemp('08');
            } else if (check3.includes('1')) {
                settemp('04');
            } else if (check2.includes('1')) {
                settemp('02');
            } else if (check1.includes('1')) {
                settemp('00');
            }
        }
    }

    const navigatevariable = () => {
        if (temp.includes('00')) {
            Alert.alert(`Lựa Chọn Không Khả Thi`,
                `Vui Lòng Chọn Lại`
            )
        } else {
            if (stylebutton5 == true) {
                navigate = '>>'
                navigation.navigate(address,
                    {
                        temp: temp,
                        countled: countled,
                        navigate: navigate
                    })
            } else if (stylebutton6 == true) {
                navigate = '<<'
                navigation.navigate(address,
                    {
                        temp: temp,
                        countled: countled,
                        navigate: navigate
                    })
            }
        }
    }

    const navivatecode = () => {
        if (stylebutton1 == true) {
            if (totalBit.includes('00')) {
                Alert.alert(`Lựa Chọn Không Khả Thi`,
                    `Vui Lòng Chọn Lại`
                )
            } else {
                navigation.navigate('Choptat',
                    {
                        totalbit: totalBit,
                    })
            }
        } else if (stylebutton2 == true && (stylebutton5 == true || stylebutton6 == true)) {
            setaddress('Sangdan')
            navigatevariable();
        } else if (stylebutton3 == true && (stylebutton5 == true || stylebutton6 == true)) {
            setaddress('Sangdon')
            navigatevariable();
        } else if (stylebutton4 == true && (stylebutton5 == true || stylebutton6 == true)) {
            setaddress('Sangduoi')
            navigatevariable();
        } else {
            Alert.alert(`Lựa Chọn Không Khả Thi`,
                `Vui Lòng Chọn Lại`
            )
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ffffff' />
            <View style={styles.body}>
                <View style={styles.textheader}>
                    <Text style={styles.bodytext}> LED ĐƠN </Text>
                </View>
                <View style={styles.ledinput}>
                    <TouchableHighlight onPress={() => changeled(setled4, check4, setcheck4)}>
                        <Image
                            source={led4}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled3, check3, setcheck3)}>
                        <Image
                            source={led3}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled2, check2, setcheck2)}>
                        <Image
                            source={led2}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled1, check1, setcheck1)}>
                        <Image
                            source={led1}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                </View>
                <View style={styles.stt}>
                    <Text style={styles.stttext}>4</Text>
                    <Text style={styles.stttext}>3</Text>
                    <Text style={styles.stttext}>2</Text>
                    <Text style={styles.stttext}>1</Text>
                </View>
                <View style={styles.ledinput}>
                    <TouchableHighlight onPress={() => changeled(setled8, check8, setcheck8)}>
                        <Image
                            source={led8}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled7, check7, setcheck7)}>
                        <Image
                            source={led7}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled6, check6, setcheck6)}>
                        <Image
                            source={led6}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => changeled(setled5, check5, setcheck5)}>
                        <Image
                            source={led5}
                            style={styles.led}
                        ></Image>
                    </TouchableHighlight>
                </View>
                <View style={styles.stt}>
                    <Text style={styles.stttext}>8</Text>
                    <Text style={styles.stttext}>7</Text>
                    <Text style={styles.stttext}>6</Text>
                    <Text style={styles.stttext}>5</Text>
                </View>
                <View style={styles.buttonoption}>
                    <TouchableHighlight
                        onPress={() => choisebuttonchoptat()}
                    >
                        <View style={stylebutton1 ? styles.buttonchoosed : styles.buttonnotchoise}>
                            <View style={stylebutton1 ? styles.insidebutton : styles.insidebuttonnotchoise}>
                                <Text style={styles.textbutton}>Chớp Tắt</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                </View>
                <View style={styles.buttonoption}>
                    <TouchableHighlight
                        onPress={() => choisebutton(setstylebutton2, setstylebutton1, setstylebutton3, setstylebutton4)}
                    >
                        <View style={stylebutton2 ? styles.buttonchoosed : styles.buttonnotchoise}>
                            <View style={stylebutton2 ? styles.insidebutton : styles.insidebuttonnotchoise}>
                                <Text style={styles.textbutton}>Sáng Dần</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => choisebutton(setstylebutton3, setstylebutton1, setstylebutton2, setstylebutton4)}
                    >
                        <View style={stylebutton3 ? styles.buttonchoosed : styles.buttonnotchoise}>
                            <View style={stylebutton3 ? styles.insidebutton : styles.insidebuttonnotchoise}>
                                <Text style={styles.textbutton}>Sáng Dồn</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => choisebutton(setstylebutton4, setstylebutton1, setstylebutton2, setstylebutton3)}
                    >
                        <View style={stylebutton4 ? styles.buttonchoosed : styles.buttonnotchoise}>
                            <View style={stylebutton4 ? styles.insidebutton : styles.insidebuttonnotchoise}>
                                <Text style={styles.textbutton}>Sáng Đuổi</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                {stylebutton2 || stylebutton3 || stylebutton4 ? (
                    <View style={styles.buttonoption}>
                        <TouchableHighlight
                            onPress={() => choiserightleftbutton(setstylebutton5, setstylebutton6)}
                        >
                            <View style={stylebutton5 ? styles.rightleftbutton : styles.rightleftbuttonnotchoise}>
                                <View style={stylebutton5 ? styles.insiderightleftbutton : styles.insiderightleftbuttonnotchoise}>
                                    <Text style={styles.textbutton}>Từ Trái Sang Phải</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => choiserightleftbutton(setstylebutton6, setstylebutton5)}
                        >
                            <View style={stylebutton6 ? styles.rightleftbutton : styles.rightleftbuttonnotchoise}>
                                <View style={stylebutton6 ? styles.insiderightleftbutton : styles.insiderightleftbuttonnotchoise}>
                                    <Text style={styles.textbutton}>Từ Phải Sang Trái</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                ) : null}
            </View>
            <View style={styles.footer}>
                <TouchableHighlight
                    onPress={() => reset()}
                >
                    <View style={styles.buttonreset}>
                        <View style={styles.insidebuttonreset}>
                            <Image
                                source={imagereset}
                                style={{ width: width * 8 / 100, height: height * 4.5 / 100 }}></Image>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={navivatecode}
                >
                    <View style={styles.buttonfooter}>
                        <Text style={styles.buttonfootertext}>Code</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc84a',
    },
    body: {
        width: width,
        height: height * 85 / 100,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomStartRadius: 45,
        borderBottomEndRadius: 45,
        paddingBottom: 10
    },
    textheader: {
        width: width * 87 / 100,
        height: height * 6 / 100,
        //backgroundColor: '#111111',
        justifyContent: 'center',
        marginLeft: width * 58 / 100,
        marginTop: -10,
        marginBottom: 15,
    },
    bodytext: {
        color: '#111111',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 36,
    },
    ledinput: {
        width: width,
        height: height * 11 / 100,
        //backgroundColor: '#111111',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    led: {
        width: width * 2 / 10,
        height: height * 11 / 100,
        marginHorizontal: 10,
    },
    stt: {
        width: width,
        height: height * 11 / 100,
        //backgroundColor: '#111111',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    stttext: {
        fontSize: 25,
        fontFamily: 'OpenSansCondensed-Bold',
        color: '#111111',
        marginHorizontal: width * 1.11 / 10,
    },
    buttonoption: {
        width: width,
        height: height * 7 / 100,
        //backgroundColor: '#111111',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
    },
    buttonchoosed: {
        width: width * 25 / 100,
        height: height * 7 / 100,
        backgroundColor: '#e9a189',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insidebutton: {
        width: width * 23 / 100,
        height: height * 5.7 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9967a',
        borderWidth: 0.5,
        borderColor: '#ffffff',
        marginRight: 0.5,
    },
    buttonnotchoise: {
        width: width * 25 / 100,
        height: height * 7 / 100,
        backgroundColor: '#dcdcdc',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insidebuttonnotchoise: {
        width: width * 23 / 100,
        height: height * 5.7 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: '#696969',
        marginRight: 0.5,
    },
    rightleftbutton: {
        width: width * 45 / 100,
        height: height * 8 / 100,
        backgroundColor: '#f08080',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insiderightleftbutton: {
        width: width * 43.5 / 100,
        height: height * 7 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee7575',
        borderWidth: 0.5,
        borderColor: '#ffffff',
        marginRight: 0.5,
    },
    rightleftbuttonnotchoise: {
        width: width * 45 / 100,
        height: height * 8 / 100,
        backgroundColor: '#dcdcdc',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insiderightleftbuttonnotchoise: {
        width: width * 42.5 / 100,
        height: height * 6.5 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: '#696969',
        marginRight: 0.5,
    },
    textbutton: {
        fontSize: 20,
        fontFamily: 'OpenSansCondensed-Bold',
        color: '#111111',
    },
    footer: {
        width: width,
        height: height * 12 / 100,
        //backgroundColor: '#111111',
        marginTop: 5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 15,
    },
    buttonfooter: {
        backgroundColor: '#2c2b2c',
        width: width * 50 / 100,
        height: height * 10 / 100,
        borderRadius: 15,
        marginRight: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonreset: {
        backgroundColor: '#2c2b2c',
        width: width * 30 / 100,
        height: height * 10 / 100,
        borderRadius: 15,
        marginRight: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    insidebuttonreset: {
        width: width * 28.5 / 100,
        height: height * 9 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#dcdcdc',
        borderRadius: 15,
        marginBottom: 1
    },
    buttonfootertext: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'OpenSansCondensed-Bold'
    }
})

export default Itemleddon;