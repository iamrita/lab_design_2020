import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function OtherResults( props ) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Other cash for students
            </Text>
            <View style={styles.results}>
                <Text style={styles.firstSubtext}>
                    You are eligible for up to:
                </Text>
                <View style={styles.numberBox}>
                    <Text style={styles.number}>
                        $2,328 
                    </Text>
                </View>
                <Text style={styles.secondSubtext}>
                    through the Pell Grant!
                </Text>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate("Results")
                    }
                >
                    <Ionicons name="ios-arrow-round-back" size={normalize(120)} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "space-between",
        paddingTop: normalize(70),
    },
    results: {
        paddingTop: normalize(50),
        paddingBottom: normalize(35),
        flex: 0.6,
        justifyContent: "space-between",
    },
    question: {
        paddingTop: normalize(10),
        paddingBottom: normalize(10),
        flex: 1,
    },
    titleText: {
        fontSize: normalize(40),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    arrow: {
        alignItems: 'flex-start',
        marginLeft: normalize(10)
    },
    firstSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        paddingBottom: normalize(10),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    number: {
        fontSize: normalize(40),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        paddingBottom: normalize(20),
        paddingTop: normalize(20),
    },
    numberBox: {
        backgroundColor: '#FFD581',
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: normalize(30),
        marginLeft: normalize(30),
        height: normalize(80),
    },
    secondSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        //paddingTop: normalize(10),
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
  });
