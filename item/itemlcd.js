import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, StatusBar, TextInput, Text, TouchableOpacity, Image, Button, Linking } from "react-native";

const { width, height } = Dimensions.get('window');
const gif = require('../assets/image/itemlcd/giftutorial.gif');
const getlibrary = "https://github.com/minhhoang-00/lcd_library.git";


const itemlcd = () => {

    useEffect(() => {
    })

    const linelcd = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    const [Line1, setLine1] = useState('');
    const [Startpointline1, setStartpointline1] = useState(16);
    const [Line2, setLine2] = useState('');
    const [Startpointline2, setStartpointline2] = useState(16);

    const renderlinelcd = (arr, setLine, Line, Startpointline, setStartpointline) => {
        return arr.map(obj => {
            return <TextInput style={styles.textinput} onChangeText={text => {
                setLine(Line + text);
                Startpointline > obj ? setStartpointline(obj) : null
            }}></TextInput>
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} />
            <View style={styles.body}>
                <View style={styles.textheader}>
                    <Text style={styles.bodytext}> LCD </Text>
                </View>
                <View style={styles.backgroundlcd}>
                    <View style={styles.lcd}>
                        <View style={styles.linelcd}>
                            {renderlinelcd(linelcd, setLine1, Line1, Startpointline1, setStartpointline1)}
                        </View>
                        <View style={styles.linelcd}>
                            {renderlinelcd(linelcd, setLine2, Line2, Startpointline2, setStartpointline2)}
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <View style={{ width: width * 40 / 100, height: height * 10 / 100, backgroundColor: '#111111', marginLeft: 210, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: -35, }}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontFamily: 'OpenSansCondensed-Bold',}}>Code</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.tutorial}>
            <View style={styles.textbottom}>
                    <Text style={styles.bottomtext}> Cài Đặt Thư Viện LCD </Text>
                    <View style={{width: width * 85 / 100, height: height * 30 / 100, borderWidth: 1, borderColor: '#dcdcdc', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 15,}}>
                    <Image source={gif} style={{width: width * 80 / 100, height: height * 28 / 100, }}/>
                    </View>
                    <Button 
                    title="Down Library"
                    color="#111111"
                    onPress={ ()=>{ Linking.openURL(getlibrary)}}
                    />
                </View>
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
        height: height * 40 / 100,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomStartRadius: 45,
        borderBottomEndRadius: 45,
        alignItems: 'center',
    },
    backgroundlcd: {
        width: width * 95 / 100,
        height: height * 25 / 100,
        backgroundColor: '#C9CAAB',
        borderWidth: 4,
        borderColor: '#6A0B09',
        //justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },
    lcd: {
        width: width * 90 / 100,
        height: height * 15 / 100,
        backgroundColor: '#97B100',
        borderWidth: 2,
        borderColor: '#111111',
        //marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linelcd: {
        width: width * 88.8 / 100,
        height: height * 7.3 / 100,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    numberline2: {
        fontSize: 15,
        color: '#111111',
        marginHorizontal: 4.4,
    },
    textinput: {
        width: width * 5.542 / 100,
        height: height * 7.1 / 100,
        borderRightWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textheader: {
        width: width * 87 / 100,
        height: height * 6 / 100,
        //backgroundColor: '#111111',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -5,
    },
    bodytext: {
        color: '#111111',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 36,
    },
    tutorial: {
        width: width,
        height: height * 48 / 100,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderTopStartRadius: 45,
        borderTopEndRadius: 45,
        marginTop: 50,
    },
    textbottom: {
        width: width * 87 / 100,
        height: height * 6 / 100,
        //backgroundColor: '#111111',
        alignItems: 'center',
        marginLeft: 23,
        marginTop: 5
    },
    bottomtext: {
        color: '#111111',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 30,
    },
})

export default itemlcd;