import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, FlatList, TouchableHighlight, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');
const image = ('../assets/image/homeimage/iconbetween.png');

const Item = ({ title1, title2, source1, source2, navigate1, navigate2, navigation, updating1, updating2 }) => (
    <View style={styles.item}>
        <TouchableHighlight
            onPress={() => { navigation.navigate(navigate1) }}
        >
            <View style={styles.itemleft}>
                <View style={styles.itemtop}>
                    <View style={updating1 ? styles.viewupdate : styles.viewupdatenone}>
                        <Text style={styles.updatingtext}>UPDATING</Text>
                    </View>
                    <Image
                        source={source1}
                        style={updating1 ? styles.itemimg : styles.itemimg1}
                    />
                </View>
                <View style={styles.itembottom}>
                    <Text style={styles.itemtext}>{title1}</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={() => { navigation.navigate(navigate2) }}
        >
            <View style={styles.itemright}>
                <View style={styles.itemtop}>
                    <View style={updating2 ? styles.viewupdate : styles.viewupdatenone}>
                        <Text style={styles.updatingtext}>UPDATING</Text>
                    </View>
                    <Image
                        source={source2}
                        style={updating2 ? styles.itemimg : styles.itemimg1}
                    />
                </View>
                <View style={styles.itembottom}>
                    <Text style={styles.itemtext}>{title2}</Text>
                </View>
            </View>
        </TouchableHighlight>
    </View>
);

const Home = ({ navigation }) => {

    const [category, setcategory] = useState([
        { id: '1', title1: 'led đơn', source1: require('../assets/image/homeimage/leddon.png'), title2: 'led 7 đoạn', source2: require('../assets/image/homeimage/led7doan1.png'), navigate1: 'Itemleddon', navigate2: 'itemled7doan', },
        { id: '2', title1: 'lcd', source1: require('../assets/image/homeimage/lcd.png') , navigate1: 'Itemlcd' ,title2: 'led matrix', source2: require('../assets/image/homeimage/ledmatrix1.png'), updating2: true },
        { id: '3', title1: 'nút nhấn', source1: require('../assets/image/homeimage/nutnhan.png'), updating1: true ,title2: 'ngắt', source2: require('../assets/image/homeimage/ngat.png'), updating2: true },
        { id: '4', title1: 'timer', source1: require('../assets/image/homeimage/timer.png'),updating1: true ,title2: 'pwm', source2: require('../assets/image/homeimage/motors.png'), navigate2: 'Itempwm',},
    ])

    const renderItem = ({ item }) => (
        <Item title1={item.title1} source1={item.source1} title2={item.title2} source2={item.source2} navigate1={item.navigate1} navigate2={item.navigate2} navigation={navigation} updating1={item.updating1} updating2={item.updating2}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor='#dcdcdc'
            />
            <ScrollView >
                <View style={styles.header}>
                    <Text style={styles.textheader}>Xin Chào </Text>
                    <Text style={styles.textheader2}>Nguyễn Minh Hoàng</Text>
                </View>
                <TouchableHighlight
                    onPress={() => { navigation.navigate('MainItem') }}
                >
                    <LinearGradient
                        style={styles.body}
                        colors={['#fbd046', '#ffc84a', '#fbb01f']}
                    >
                        <Image
                            style={styles.imagebetween}
                            source={require(image)}
                        ></Image>
                        <Text style={styles.textbetween1}>Tài Liệu</Text>
                        <Text style={styles.textbetween2}>Tất tần tật về lập trình vi xử lý</Text>
                        <Text style={{ fontSize: 15, color: '#ffffff', marginTop: 5, marginLeft: 35, fontFamily: 'OpenSansCondensed-Bold', }}>Pic16F887</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <View style={styles.highlights}>
                    <Text style={styles.texthighlights}>Bài Tập Cơ Bản</Text>
                </View>
                <View style={styles.listitem}>
                    <FlatList
                        data={category}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footertext}>Chúc Bạn Học Tốt Và Thành Công</Text>
                </View>
            </ScrollView >
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc'
    },
    header: {
        width: width * 80 / 100,
        height: height * 20 / 100,
        marginHorizontal: 25,
        marginBottom: 15
    },
    textheader: {
        fontSize: 40,
        color: '#111111',
        fontFamily: 'Dosis-Medium',
    },
    textheader2: {
        fontSize: 20,
        color: '#111111',
        fontFamily: 'Dosis-Medium',
    },
    body: {
        backgroundColor: '#ffcc4f',
        width: width * 80 / 100,
        height: height * 60 / 100,
        marginHorizontal: 25,
        marginTop: -70,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 170,
        shadowColor: '#111111',
        elevation: 3
    },
    imagebetween: {
        width: width * 40 / 100,
        height: height * 40 / 100,
        marginLeft: "63%",
        marginTop: -60,
    },
    textbetween1: {
        color: '#ffffff',
        fontSize: 60,
        fontFamily: 'OpenSansCondensed-Bold',
        marginLeft: 30,
        marginTop: 40
    }
    , textbetween2: {
        color: '#ffffff',
        marginLeft: 35,
        fontSize: 15,
        fontFamily: 'OpenSansCondensed-Bold',
    },
    highlights: {
        marginTop: 30,

    },
    texthighlights: {
        color: '#111111',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 30,
        marginLeft: 30
    },
    listitem: {
        marginTop: 30,
        width: width * 100 / 100,
        height: height + 250,
        marginHorizontal: 25,
    },
    item: {
        width: width * 87 / 100,
        height: height * 30 / 100,
        borderRadius: 10,
        marginBottom: 25,
        flexDirection: 'row',

    },
    itemleft: {
        width: width * 42 / 100,
        height: height * 30 / 100,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: 'Black',
        elevation: 3
    },
    itemright: {
        width: width * 42 / 100,
        height: height * 30 / 100,
        marginLeft: 11,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: 'Black',
        elevation: 3
    },
    itemtop: {
        width: width * 41.3 / 100,
        height: height * 20 / 100,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
    },
    itembottom: {
        width: width * 41.3 / 100,
        height: height * 9.9 / 100,
        backgroundColor: '#ffcc4f',
        borderBottomRightRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemimg: {
        width: width * 22 / 100,
        height: height * 20 / 100,
        marginLeft: 37,
        marginTop: -20,
    },
    itemimg1: {
        width: width * 22 / 100,
        height: height * 20 / 100,
        marginLeft: 37,
        marginTop: 5,
    },
    itemtext: {
        fontSize: 30,
        fontFamily: 'OpenSansCondensed-Bold',
        color: '#111111',
    },
    footer: {
        width: width * 80 / 100,
        height: height * 10 / 100,
        borderTopWidth: 1,
        borderColor: '#a9a9a9a9',
        marginHorizontal: 38,
    },
    footertext: {
        fontSize: 15,
        fontFamily: 'OpenSansCondensed-Bold',
        textAlign: 'center',
        marginTop: 18
    },
    footertext2: {
        fontSize: 10,
        fontFamily: 'OpenSansCondensed-Bold',
        textAlign: 'center',

    },
    viewupdate: {
        width: width * 16 / 100, 
        height: height * 4 / 100, 
        backgroundColor: '#f94441', 
        borderWidth: 2, 
        borderColor: '#f94441', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: "62%", 
    },
    viewupdatenone: {
        display: 'none',
    },
    updatingtext: { 
        fontSize: 11, 
        color: '#ffffff', 
    }
})

export default Home;