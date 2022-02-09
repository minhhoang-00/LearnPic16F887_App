import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image, StatusBar, FlatList, ScrollView } from "react-native";

const { width, height } = Dimensions.get('window');
const iconreturn = ('../assets/image/itemleddon/iconreturn.png');

const Item = ({ source1, source2, pdf1, pdf2, navigation }) => (
    <View style={styles.item}>
        <TouchableHighlight
            onPress={() => { navigation.navigate(pdf1) }}
        >
            <View style={styles.itemleft}>
                <Image
                    source={source1}
                    style={styles.itemimg1}
                ></Image>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={() => { navigation.navigate(pdf2) }}
        >
            <View style={styles.itemright}>
                <Image
                    source={source2}
                    style={styles.itemimg2}
                ></Image>
            </View>
        </TouchableHighlight>
    </View>
)

const MainItem = ({ navigation }) => {

    const [data, setdata] = useState([
        { id: '1', source1: require('../assets/image/mainitem/c1.png'), source2: require('../assets/image/mainitem/c2.png'), pdf1: 'pdfchuong1', pdf2: 'pdfchuong2' },
        { id: '2', source1: require('../assets/image/mainitem/c3.png'), source2: require('../assets/image/mainitem/c4.png'), pdf1: 'pdfchuong3', pdf2: 'pdfchuong4' },
        { id: '3', source1: require('../assets/image/mainitem/c5.png'), source2: require('../assets/image/mainitem/c6.png'), pdf1: 'pdfchuong5', pdf2: 'pdfchuong6' },
        { id: '4', source1: require('../assets/image/mainitem/c7.png'), source2: require('../assets/image/mainitem/c8.png'), pdf1: 'pdfchuong7', pdf2: 'pdfchuong8' },
    ])

    const renderItem = ({ item }) => (
        <Item source1={item.source1} source2={item.source2} pdf1={item.pdf1} pdf2={item.pdf2} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#ffffff'
            />
            <View style={styles.body}>
                    <View style={styles.textheader}>
                        <Text style={styles.bodytext}>Kiến Thức Cần Nhớ</Text>
                    </View>
                <ScrollView style={styles.listitem}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight
                    onPress={() => { navigation.navigate('Itemleddon') }}
                >
                    <View style={styles.buttonfooter}>
                        <Text style={styles.buttonfootertext}>Trang Bài Tập</Text>
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
    textheader:{
        width: width * 87 / 100,
        height: height * 10 / 100,
        //backgroundColor: '#111111',
        justifyContent: 'center',
        marginLeft: 95,
        marginTop: -3,
    },
    bodytext: {
        color: '#111111',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 36,
    },
    listitem: {
        width: width * 87 / 100,
        height: height * 75 / 100,
        marginTop: 10,
        marginLeft: 25
    },
    item: {
        flexDirection: 'row',
        width: width * 87 / 100,
        height: height * 30 / 100,
        marginBottom: 10,
        //backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    itemleft: {
        width: width * 42 / 100,
        height: height * 30 / 100,
        //backgroundColor: '#dcdcdc',
        borderTopLeftRadius: 20,
        shadowColor: '#111111',
        elevation: 4,

    },
    itemright: {
        width: width * 42 / 100,
        height: height * 30 / 100,
        //backgroundColor: '#dcdcdc',
        marginLeft: 13,
        borderBottomRightRadius: 20,
        shadowColor: '#111111',
        elevation: 4,
    },
    itemimg1: {
        width: width * 41 / 100,
        height: height * 30 / 100,
        borderTopLeftRadius: 20,
        marginTop: 1
    },
    itemimg2: {
        width: width * 41 / 100,
        height: height * 30 / 100,
        borderBottomRightRadius: 20,
        marginTop: 1
    },
    footer: {
        width: width,
        height: height * 12 / 100,
        //backgroundColor: '#111111',
        marginTop: 11,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    buttonfooter: {
        backgroundColor: '#2c2b2c',
        width: width * 60 / 100,
        height: height * 10 / 100,
        borderRadius: 15,
        marginRight: 27,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonfootertext: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'OpenSansCondensed-Bold'
    }
})

export default MainItem;