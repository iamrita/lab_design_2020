import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function EITC( props ) {
    const user_data = props.navigation.getParam('user_data');
    const familyIncome = 'a'

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Earned Income Tax Credit
            </Text>
            { ((familyIncome==='a') | (familyIncome==='d')) &&
                <View style={styles.results}>
                    <Text style={styles.firstTopSubtext}>
                        Based on income your family might be eligible for the EITC and CalEITC! 
                    </Text>
                    <Text style={styles.secondTopSubtext}>
                        Families with children receive
                    </Text>
                    <View style={styles.numberBox}>
                        <Text style={styles.number}>
                            $3,141
                        </Text>
                    </View>
                    <Text style={styles.firstBottomSubtext}>
                        on average when they do their taxes. 
                    </Text>
                    <Text style={styles.secondBottomSubtext}>
                        Find out how your parents can file their taxes for free! 
                    </Text>
                </View>
            }
            { (familyIncome == 'e') &&
                <View style={styles.results}>
                <Text style={styles.topSubtext}>
                    Based on income your family might be eligible for the EITC!
                </Text>
                <Text style={styles.topSubtext}>
                    Many families with children in your income range receive around
                </Text>
                <View style={styles.numberBox}>
                    <Text style={styles.number}>
                        $1,000 
                    </Text>
                </View>
                <Text style={styles.bottomSubtext}>
                    on average when they do their taxes. 
                </Text>
                <Text style={styles.bottomSubtext}>
                    Find out how your parents can file their taxes for free! 
                </Text>
            </View>
            }
            <View style={styles.arrows}>
                <View style={styles.leftArrow}>
                    <Text style={styles.backToResults}>Back to Results</Text>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate("Results")
                        }
                    >
                        <Ionicons name="ios-arrow-round-back" size={normalize(120)} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.rightArrow}>
                    <Text style={styles.nextSteps}>More Cash</Text>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate("Share")
                        }
                    >
                        <Ionicons name="ios-arrow-round-forward" size={normalize(120)} color="black" />
                    </TouchableOpacity>
                </View>
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
        paddingTop: normalize(40),
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
    firstTopSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        paddingBottom: normalize(15),
        fontFamily: 'Hoefler Text',
        //fontWeight: 'bold'
    },
    secondTopSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        paddingBottom: normalize(15),
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
    firstBottomSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingTop: normalize(15),
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    secondBottomSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingTop: normalize(15),
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        //fontWeight: 'bold'
    },
    nextSteps: {
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold',
        marginRight: normalize(5),
        fontSize: normalize(15),
    },
    backToResults: {
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold',
        marginLeft: normalize(5),
        fontSize: normalize(15),
    },
    arrows: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: 'flex-end'
    },
    leftArrow: {
        alignItems: 'flex-start',
        marginLeft: normalize(10)
    },
    rightArrow: {
        alignItems: 'flex-end',
        marginRight: normalize(10)
    },
  });

