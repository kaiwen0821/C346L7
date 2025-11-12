// Exercise 2
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
});

const Exercise2 = () => {
    return (
        <ScrollView>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </ScrollView>
    );
};

export default Exercise2;
