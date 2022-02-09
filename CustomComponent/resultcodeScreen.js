import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, StatusBar, Image, Text, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const iconsystemdocuments = require("../assets/image/sourcecode/icon_system_documents.png")
const { width, height } = Dimensions.get('window');

const ResultcodeScreen = (props) => {

    const renderCode = (arr) => {
        return arr.map(obj => {
            return <Text style={styles.textcode}>{obj}</Text>
        })
    }
    return (
        <LinearGradient colors={['#fbd046', '#ffc84a', '#fbb01f']} style={styles.container}>
            <StatusBar backgroundColor='#373B44' />
            <View style={styles.body}>
                <View style={styles.circle}>
                    <Image source={iconsystemdocuments} style={styles.icon} />
                </View>
                <ScrollView
                    style={styles.viewcode}
                >
                    <View style={styles.insideviewcode}>
                        <View style={styles.linecode}>
                            {renderCode(props.code)}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',

    },
    body: {
        width: width * 95 / 100,
        height: height * 85 / 100,
        marginLeft: 10,
    },
    viewcode: {
        backgroundColor: '#ffffff',
        width: width * 94 / 100,
        height: height * 85 / 100,
        borderRadius: 10,
        marginTop: '-15%'
    },
    insideviewcode: {
        width: width * 95 / 100,
        height: height * 70 / 100,
        marginTop: '12%',
        marginLeft: '8%'
    },
    linenumber: {
        height: '100%',
        width: '6%',
        border: '#999999',
        borderRightWidth: 1,
        paddingTop: 5,
    },
    linecode: {
        height: '100%',
        width: '93%',
        marginLeft: 2,
        marginTop: -20
    },
    textcode: {
        color: 'black',
        fontSize: 20,
        textAlign: 'left'
    },
    textnumber: {
        color: '#696969',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 2.7,
    },
    icon: {
        width: width * 20 / 100,
        height: height * 10 / 100,
        zIndex: 999,
    },
    circle: {
        width: 99,
        height: 100,
        borderRadius: 100 / 2,
        marginLeft: '70%',
        zIndex: 999,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: 'center',
    }
})

export default ResultcodeScreen;