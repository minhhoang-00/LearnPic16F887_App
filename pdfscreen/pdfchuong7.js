import React from 'react';
import { StyleSheet, Dimensions, View, StatusBar } from 'react-native';
import Pdf from 'react-native-pdf';

const source = { uri: "bundle-assets://data/pdf/chuong7.pdf" }

const pdfchuong7 = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#0000ff'/>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default pdfchuong7;