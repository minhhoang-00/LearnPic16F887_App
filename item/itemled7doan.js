import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');
const imagelist = [
    require('../assets/image/itemled7doan/led7doan-khung.png'),
    require('../assets/image/itemled7doan/led7doan-a-tat.png'),
    require('../assets/image/itemled7doan/led7doan-a-bat.png'),
    require('../assets/image/itemled7doan/led7doan-b-tat.png'),
    require('../assets/image/itemled7doan/led7doan-b-bat.png'),
    require('../assets/image/itemled7doan/led7doan-c-tat.png'),
    require('../assets/image/itemled7doan/led7doan-c-bat.png'),
    require('../assets/image/itemled7doan/led7doan-d-tat.png'),
    require('../assets/image/itemled7doan/led7doan-d-bat.png'),
    require('../assets/image/itemled7doan/led7doan-e-tat.png'),
    require('../assets/image/itemled7doan/led7doan-e-bat.png'),
    require('../assets/image/itemled7doan/led7doan-f-tat.png'),
    require('../assets/image/itemled7doan/led7doan-f-bat.png'),
    require('../assets/image/itemled7doan/led7doan-g-tat.png'),
    require('../assets/image/itemled7doan/led7doan-g-bat.png'),
    require('../assets/image/itemled7doan/led7doan-tron-tat.png'),
    require('../assets/image/itemled7doan/led7doan-tron-bat.png'),
    require('../assets/image/itemled7doan/muitenphai.png'),
]


const itemled7doan = ({ navigation }) => {

    useEffect(() => {
        showresult();
        Setchar();
        updatedatasendcountup();
    })

    const renderPicker = (selectedvalue, setSelectedvalue) => {
        return (
            <Picker
                style={{ height: 95, width: 100 }}
                selectedValue={selectedvalue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedvalue(itemValue)
                }>
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="31" value="31" />
                <Picker.Item label="32" value="32" />
                <Picker.Item label="33" value="33" />
                <Picker.Item label="34" value="34" />
                <Picker.Item label="35" value="35" />
                <Picker.Item label="36" value="36" />
                <Picker.Item label="37" value="37" />
                <Picker.Item label="38" value="38" />
                <Picker.Item label="39" value="39" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="41" value="41" />
                <Picker.Item label="42" value="42" />
                <Picker.Item label="43" value="43" />
                <Picker.Item label="44" value="44" />
                <Picker.Item label="45" value="45" />
                <Picker.Item label="46" value="46" />
                <Picker.Item label="47" value="47" />
                <Picker.Item label="48" value="48" />
                <Picker.Item label="49" value="49" />
                <Picker.Item label="50" value="50" />
                <Picker.Item label="51" value="51" />
                <Picker.Item label="52" value="52" />
                <Picker.Item label="53" value="53" />
                <Picker.Item label="54" value="54" />
                <Picker.Item label="55" value="55" />
                <Picker.Item label="56" value="56" />
                <Picker.Item label="57" value="57" />
                <Picker.Item label="58" value="58" />
                <Picker.Item label="59" value="59" />
                <Picker.Item label="60" value="60" />
                <Picker.Item label="61" value="61" />
                <Picker.Item label="62" value="62" />
                <Picker.Item label="63" value="63" />
                <Picker.Item label="64" value="64" />
                <Picker.Item label="65" value="65" />
                <Picker.Item label="66" value="66" />
                <Picker.Item label="67" value="67" />
                <Picker.Item label="68" value="68" />
                <Picker.Item label="69" value="69" />
                <Picker.Item label="70" value="70" />
                <Picker.Item label="71" value="71" />
                <Picker.Item label="72" value="72" />
                <Picker.Item label="73" value="73" />
                <Picker.Item label="74" value="74" />
                <Picker.Item label="75" value="75" />
                <Picker.Item label="76" value="76" />
                <Picker.Item label="77" value="77" />
                <Picker.Item label="78" value="78" />
                <Picker.Item label="79" value="79" />
                <Picker.Item label="80" value="80" />
                <Picker.Item label="81" value="81" />
                <Picker.Item label="82" value="82" />
                <Picker.Item label="83" value="83" />
                <Picker.Item label="84" value="84" />
                <Picker.Item label="85" value="85" />
                <Picker.Item label="86" value="86" />
                <Picker.Item label="87" value="87" />
                <Picker.Item label="88" value="88" />
                <Picker.Item label="89" value="89" />
                <Picker.Item label="90" value="90" />
                <Picker.Item label="91" value="91" />
                <Picker.Item label="92" value="92" />
                <Picker.Item label="93" value="93" />
                <Picker.Item label="94" value="94" />
                <Picker.Item label="95" value="95" />
                <Picker.Item label="96" value="96" />
                <Picker.Item label="97" value="97" />
                <Picker.Item label="98" value="98" />
                <Picker.Item label="99" value="99" />
            </Picker>
        )
    }

    const changButton = (checkCathode, setcheckAnode, setcheckCathode) => {
        if (checkCathode.includes('0')) {
            setcheckAnode('0');
            setcheckCathode('1')
        } else if (checkCathode.includes('1')) {
            setcheckAnode('1');
            setcheckCathode('0');
        }
    }

    const changimage = (setimage, image, check, setcheck) => {
        var n = imagelist.indexOf(image)
        if (check.includes('1')) {
            setimage(imagelist[n - 1]);
            setcheck('0');
        } else if (check.includes('0')) {
            setimage(imagelist[n + 1]);
            setcheck('1');
        }

    }

    const SetAnode = () => {
        if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 0');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1')) {
            setresult('C 0');
        } else if (check0.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 2');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('9 0');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 8');
        } else if (check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 3');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check6.includes('1')) {
            setresult('B 0');
        } else if (check0.includes('1') && check1.includes('1') && check3.includes('1') && check4.includes('1') && check6.includes('1')) {
            setresult('A 4');
        } else if (check0.includes('1') && check2.includes('1') && check3.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('9 2');
        } else if (check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check6.includes('1')) {
            setresult('A 1');
        } else if (check0.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 6');
        } else if (check1.includes('1') && check2.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('9 9');
        } else if (check0.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1')) {
            setresult('C 6');
        } else if (check0.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('8 E');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1')) {
            setresult('8 F');
        } else if (check1.includes('1') && check2.includes('1')) {
            setresult('F 9');
        } else {
            setresult('0 0');
        }
    }

    const SetCathode = () => {
        if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 F');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1')) {
            setresult('3 F');
        } else if (check0.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 D');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('6 F');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 7');
        } else if (check2.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 C');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1') && check3.includes('1') && check6.includes('1')) {
            setresult('4 0');
        } else if (check0.includes('1') && check1.includes('1') && check3.includes('1') && check4.includes('1') && check6.includes('1')) {
            setresult('5 B');
        } else if (check0.includes('1') && check2.includes('1') && check3.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('6 D');
        } else if (check1.includes('1') && check2.includes('1') && check3.includes('1') && check4.includes('1') && check6.includes('1')) {
            setresult('5 F');
        } else if (check0.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 9');
        } else if (check1.includes('1') && check2.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('6 6');
        } else if (check0.includes('1') && check3.includes('1') && check4.includes('1') && check5.includes('1')) {
            setresult('3 9');
        } else if (check0.includes('1') && check4.includes('1') && check5.includes('1') && check6.includes('1')) {
            setresult('7 1');
        } else if (check0.includes('1') && check1.includes('1') && check2.includes('1')) {
            setresult('0 7');
        } else if (check1.includes('1') && check2.includes('1')) {
            setresult('0 6');
        }
    }

    const showresult = () => {
        if (checkAnode.includes('1')) {
            SetAnode();
        } else {
            SetCathode();
        }
    }

    const Setchar = () => {
        if (checkAnode1.includes('1')) {
            setchara('{0xC0, 0xF9, 0xA4, 0xB0, 0x99, 0x92, 0x82, 0x8F, 0x80, 0x90}');
            setcharb('{0x90, 0x80, 0x8F, 0x82, 0x92, 0x99, 0xB0, 0xA4, 0xF9, 0xC0}');
        } else if (checkCathode1.includes('1')) {
            setchara('{0x3F, 0x06, 0x5B, 0x40, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F}');
            setcharb('{0x6F, 0x7F, 0x07, 0x7D, 0x6D, 0x66, 0x40, 0x5B, 0x06, 0x3F}');
        }
    }

    const navigateAndSendData = () => {
        if (selectedvalue1 < selectedvalue2) {
            if (selectedvalue1 < 10 && selectedvalue2 < 10) {
                navigation.navigate('Led7doan1so',
                    {
                        totalbit: selectedvalue2,
                        chara: chara
                    })
            } else {
                navigation.navigate('Led7doan2socountup',
                    {
                        start: start,
                        end: end,
                        unitlow: unitlow,
                        unithigh: unithigh,
                        chara: chara,
                    })
            }
        } else if (selectedvalue1 > selectedvalue2) {
            if (selectedvalue1 < 10 && selectedvalue2 < 10) {
                navigation.navigate('Led7doan1so',
                    {
                        totalbit: selectedvalue2,
                        chara: charb,
                    })
            } else {
                navigation.navigate('Led7doan2socountdown',
                    {
                        start: start,
                        end: end,
                        unitlow: unitlow,
                        unithigh: unithigh,
                        chara: chara,
                        charb: charb,
                    })
            }
        }
    }

    const updatedatasendcountup = () => {
        setstart(((selectedvalue1 % 100) / 10).toFixed());
        setend(((selectedvalue2 % 100) / 10).toFixed());
        setunitlow((selectedvalue1 % 100) % 10);
        setunithigh((selectedvalue2 % 100) % 10);
    }

    const [image0, setimage0] = useState(imagelist[1]);
    const [image1, setimage1] = useState(imagelist[3]);
    const [image2, setimage2] = useState(imagelist[5]);
    const [image3, setimage3] = useState(imagelist[7]);
    const [image4, setimage4] = useState(imagelist[9]);
    const [image5, setimage5] = useState(imagelist[11]);
    const [image6, setimage6] = useState(imagelist[13]);
    const [image7, setimage7] = useState(imagelist[15]);
    const [check0, setcheck0] = useState('0');
    const [check1, setcheck1] = useState('0');
    const [check2, setcheck2] = useState('0');
    const [check3, setcheck3] = useState('0');
    const [check4, setcheck4] = useState('0');
    const [check5, setcheck5] = useState('0');
    const [check6, setcheck6] = useState('0');
    const [check7, setcheck7] = useState('0');
    const [checkAnode, setcheckAnode] = useState('1');
    const [checkCathode, setcheckCathode] = useState('0');
    const [checkAnode1, setcheckAnode1] = useState('1');
    const [checkCathode1, setcheckCathode1] = useState('0');
    const [result, setresult] = useState('0 0');
    const [selectedvalue1, setSelectedvalue1] = useState('0');
    const [selectedvalue2, setSelectedvalue2] = useState('0');
    const [start, setstart] = useState();
    const [end, setend] = useState();
    const [unitlow, setunitlow] = useState();
    const [unithigh, setunithigh] = useState();
    const [chara, setchara] = useState();
    const [charb, setcharb] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} />
            <View style={styles.body}>
                <View style={styles.component1}>
                    <Text style={{ fontSize: 20, fontFamily: 'OpenSansCondensed-Bold', }}>TRA CỨU BẢNG MÃ LED 7 ĐOẠN</Text>
                    <View style={styles.sharecomponent}>
                        <View style={styles.viewleft}>
                            <View style={styles.background}>
                                <TouchableOpacity
                                    style={{ width: width * 20 / 100, height: height * 3 / 100, marginLeft: 29, marginTop: 11, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage0, image0, check0, setcheck0)}>
                                    <Image source={image0} style={{ width: width * 24 / 100, height: height * 4 / 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 10 / 100, height: height * 10 / 100, marginLeft: 80, marginTop: 8, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage1, image1, check1, setcheck1)} >
                                    <Image source={image1} style={{ width: width * 20 / 100, height: height * 17 / 100, marginRight: 18, }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 10 / 100, height: height * 10 / 100, marginLeft: 80, marginTop: 35, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage2, image2, check2, setcheck2)}>
                                    <Image source={image2} style={{ width: width * 20 / 100, height: height * 17 / 100, marginRight: 18, }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 23 / 100, height: height * 3 / 100, marginLeft: 0, marginTop: 10, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage3, image3, check3, setcheck3)}>
                                    <Image source={image3} style={{ width: width * 53 / 100, height: height * 4 / 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 10 / 100, height: height * 10 / 100, marginLeft: 0, marginTop: -103, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage4, image4, check4, setcheck4)}>
                                    <Image source={image4} style={{ width: width * 20 / 100, height: height * 17 / 100, marginRight: 18, }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 10 / 100, height: height * 10 / 100, marginLeft: 10, marginTop: -180, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage5, image5, check5, setcheck5)}>
                                    <Image source={image5} style={{ width: width * 20 / 100, height: height * 17 / 100, marginRight: 18, }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 20 / 100, height: height * 3 / 100, marginLeft: 17, marginTop: 8, justifyContent: 'center', alignItems: 'center', padding: 5 }}
                                    onPress={() => changimage(setimage6, image6, check6, setcheck6)}>
                                    <Image source={image6} style={{ width: width * 55 / 100, height: height * 4 / 100 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewright}>
                            <View style={styles.twobutton}>
                                <TouchableOpacity style={checkAnode.includes('0') ? styles.buttonchoise : styles.buttonchoise1}
                                    onPress={() => changButton(checkCathode, setcheckAnode, setcheckCathode)}>
                                    <Text style={checkAnode.includes('0') ? styles.textbutton : styles.textbuttonchecked}>Anode</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={checkCathode.includes('0') ? styles.buttonchoise : styles.buttonchoise2}
                                    onPress={() => changButton(checkCathode, setcheckAnode, setcheckCathode)}>
                                    <Text style={checkCathode.includes('0') ? styles.textbutton : styles.textbuttonchecked}>Cathode</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.showresult}>
                                <Text style={styles.textresult}>{result}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.component2}>
                    <Text style={{ fontSize: 20, fontFamily: 'OpenSansCondensed-Bold', }}>ĐIỀU KHIỂN LED 7 ĐOẠN</Text>
                    <View style={styles.twobutton2}>
                        <TouchableOpacity style={checkAnode1.includes('0') ? styles.buttonchoise : styles.buttonchoise1}
                            onPress={() => changButton(checkCathode1, setcheckAnode1, setcheckCathode1)}>
                            <Text style={checkAnode1.includes('0') ? styles.textbutton : styles.textbuttonchecked}>Anode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={checkCathode1.includes('0') ? styles.buttonchoise : styles.buttonchoise2}
                            onPress={() => changButton(checkCathode1, setcheckAnode1, setcheckCathode1)}>
                            <Text style={checkCathode1.includes('0') ? styles.textbutton : styles.textbuttonchecked}>Cathode</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.round}>
                        <View style={styles.viewpicker}>
                            {renderPicker(selectedvalue1, setSelectedvalue1)}
                        </View>
                        <Image source={imagelist[17]} style={{ width: width * 20 / 100, height: height * 15 / 100, marginHorizontal: 20, }} />
                        <View style={styles.viewpicker}>
                            {renderPicker(selectedvalue2, setSelectedvalue2)}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight
                    onPress={() => navigateAndSendData()}
                >
                    <View style={styles.buttonfooter}>
                        <Text style={styles.buttonfootertext}>Code</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
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
        paddingBottom: 10,
    },
    component1: {
        width: width,
        height: height * 50 / 100,
        //backgroundColor: '#111111',
        borderBottomWidth: 2,
        borderBottomColor: "#dcdcdc",
        alignItems: 'center',
    },
    component2: {
        width: width,
        height: height * 25 / 100,
        //backgroundColor: '#111111',
        alignItems: 'center',
        marginTop: 10,
    },
    img7doan: {
        width: width * 6 / 100,
        height: height * 6 / 100,
    },
    sharecomponent: {
        flexDirection: 'row',

    },
    viewleft: {
        width: width * 48 / 100,
        height: height * 32 / 100,
        //backgroundColor: '#111111',
        marginRight: 5,

    },
    viewright: {
        width: width * 48 / 100,
        height: height * 32 / 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: width * 40 / 100,
        height: height * 36.5 / 100,
        backgroundColor: '#312f2e',
        marginTop: 30,
        marginLeft: 10,
        paddingLeft: 20,
    },
    twobutton: {
        flexDirection: 'row',
        marginTop: 80,
        marginRight: 12,
    },
    twobutton2: {
        flexDirection: 'row',
        marginRight: 12,
        marginTop: 10,
    },
    buttonchoise: {
        width: width * 21 / 100,
        height: height * 5 / 100,
        marginLeft: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#dcdcdc'
    },
    buttonchoise1: {
        width: width * 21 / 100,
        height: height * 5 / 100,
        marginLeft: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0706D0',
    },
    buttonchoise2: {
        width: width * 21 / 100,
        height: height * 5 / 100,
        marginLeft: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c40000',
    },
    textbutton: {
        fontSize: 20,
        fontFamily: 'OpenSansCondensed-Bold',
        color: '#111111',
    },
    textbuttonchecked: {
        fontSize: 20,
        fontFamily: 'OpenSansCondensed-Bold',
        color: '#ffffff',
    },
    showresult: {
        width: width * 40 / 100,
        height: height * 20 / 100,
        //backgroundColor: '#111111',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        borderWidth: 5,
    },
    textresult: {
        fontSize: 90,
        fontFamily: 'OpenSansCondensed-Bold'
    },
    round: {
        flexDirection: 'row',
        width: width,
        height: height * 28 / 100,
        //backgroundColor: '#111111',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50
    },
    viewpicker: {
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 5,
        borderColor: '#dcdcdc'
    },
    footer: {
        width: width,
        height: height * 12 / 100,
        //backgroundColor: '#111111',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
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
    buttonfootertext: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'OpenSansCondensed-Bold'
    }
})

export default itemled7doan;