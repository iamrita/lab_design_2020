import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default function Results( props ) {
    const user_data = props.navigation.getParam('user_data');
    const familyIncome = user_data.get('familyIncome')

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                There are 3 types of aid you’re eligible for:
            </Text>
            <View style={styles.questions}>
            <View style={styles.question}>
                    <TouchableHighlight
                        style={styles.fedButton}
                        >
                        <View style={styles.buttonItems}>
                            <Text style={styles.fedText}>Federal Grants</Text>
                            <TouchableOpacity
                                style={styles.arrowButton}
                                onPress={() => 
                                    props.navigation.navigate("FedResults", {user_data})
                                }
                            >
                                <Ionicons name="ios-arrow-round-forward" size={normalize(70)} color="white" />
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.question}>
                    <TouchableHighlight
                        style={styles.stateButton}
                        >
                        <View style={styles.buttonItems}>
                            <Text style={styles.stateText}>State Grants</Text>
                            <TouchableOpacity
                                style={styles.arrowButton}
                                onPress={() => 
                                    props.navigation.navigate("StateResults", {user_data})
                                }
                            >
                                <Ionicons name="ios-arrow-round-forward" size={normalize(70)} color="white" />
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.question}>
                    <TouchableHighlight
                        style={styles.otherButton}
                        >
                        <View style={styles.buttonItems}>
                            <Text style={styles.otherText}>Other Cash for Students</Text>
                            <TouchableOpacity
                                style={styles.arrowButton}
                                onPress={() => 
                                    props.navigation.navigate("OtherResults", {user_data})
                                }
                            >
                                <Ionicons name="ios-arrow-round-forward" size={normalize(70)} color="white" />
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
                </View>
                {((familyIncome==='$26,000 or less') | (familyIncome==='$26,001 to $43,001') | (familyIncome == '$43,001 to $65,000')) &&
                    <View style={styles.question}>
                        <TouchableHighlight
                            style={styles.EITCButton}
                            >
                            <View style={styles.buttonItems}>
                                <Text style={styles.EITCText}>Earned Income Tax Credit</Text>
                                <TouchableOpacity
                                    style={styles.arrowButton}
                                    onPress={() => 
                                        props.navigation.navigate("EITC", {user_data})
                                    }
                                >
                                    <Ionicons name="ios-arrow-round-forward" size={normalize(70)} color="white" />
                                </TouchableOpacity>
                            </View>
                            </TouchableHighlight>
                        </View>
                    }
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
    questions: {
        paddingTop: normalize(20),
        paddingBottom: normalize(35),
        flex: 1
    },
    question: {
        paddingTop: normalize(10),
        paddingBottom: normalize(10),
        justifyContent: "space-evenly"
    },
    questionText: {
        fontSize: 35,
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    fedText: {
        color:'#fff',
        textAlign:'center',
        //paddingBottom: normalize(15),
        paddingTop: normalize(32),
        fontSize: normalize(25),
        paddingLeft: normalize(20),
        fontFamily: 'Hoefler Text',
    },
    stateText: {
        color:'#fff',
        textAlignVertical:'center',
        //paddingBottom: normalize(15),
        paddingTop: normalize(32),
        paddingLeft: normalize(20),
        fontSize: normalize(25),
        fontFamily: 'Hoefler Text',
    },
    otherText: {
        color:'#fff',
        textAlign:'center',
        //paddingBottom: normalize(15),
        paddingTop: normalize(20),
        //textAlign:'flex-start',
        fontSize: normalize(25),
        paddingLeft: normalize(20),
        fontFamily: 'Hoefler Text',
    },
    EITCText: {
        color:'#fff',
        textAlign:'center',
        //paddingBottom: normalize(15),
        paddingTop: normalize(20),
        //textAlign:'flex-start',
        fontSize: normalize(25),
        paddingLeft: normalize(20),
        fontFamily: 'Hoefler Text',
    },
    fedButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        //paddingTop:30,
        //paddingBottom:30,
        justifyContent: "center",
        borderRadius:80,
        borderWidth: 10,
        height: normalize(100),
        borderColor: '#5FA3B5',
        backgroundColor: '#5FA3B5'
    },
    stateButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        //paddingTop:30,
        //paddingBottom:30,
        justifyContent: "center",
        borderRadius:80,
        borderWidth: 10,
        height: normalize(100),
        borderColor: '#A32934',
        backgroundColor: '#A32934'
    },
    otherButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        //paddingTop:30,
        //paddingBottom:30,
        justifyContent: "center",
        borderRadius:80,
        borderWidth: 10,
        height: normalize(100),
        borderColor: '#FFD581',
        backgroundColor: '#FFD581',
    },
    EITCButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        //paddingTop:30,
        //paddingBottom:30,
        justifyContent: "center",
        borderRadius:80,
        borderWidth: 10,
        height: normalize(100),
        borderColor: '#A6BD92',
        backgroundColor: '#A6BD92',
    },
    arrowButton: {
        //paddingBottom: normalize(5),
        paddingTop: normalize(7),
    },
    buttonItems: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }

  });

