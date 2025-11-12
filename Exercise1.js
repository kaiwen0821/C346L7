// Exercise 1
import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const Exercise1 = () => {
    return (
        <ScrollView style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 24 }}>RP Values</Text>
            <Text style={{ color: 'green' }}>Excellence</Text>
            <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
            <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
            <Text style={{ textAlign: 'center' }}>Teamwork</Text>
            <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
        </ScrollView>
    );
};

export default Exercise1;

