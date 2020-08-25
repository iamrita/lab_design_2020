import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';  

const original_family_income = 'a'

export default function FamilialIncome1( props ) {
    const user_data = props.navigation.getParam('user_data');
    const sizeOfFamily = user_data.get(sizeOfFamily);

    const [familyIncome, setFamilyIncome] = useState(original_family_income)
    const [firstButtonPress, setFirstButtonPress] = useState('unclicked')
    const [secondButtonPress, setSecondButtonPress] = useState('unclicked')
    const [thirdButtonPress, setThirdButtonPress] = useState('unclicked')

    const first_button = firstButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const first_text = firstButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const second_button = secondButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const second_text = secondButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const third_button = thirdButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const third_text = thirdButtonPress === 'clicked'? styles.clickedText : styles.unclickedText


    const income_amounts = new Map();
    const [firstMid, setFirstMid] = useState('$26,001 to $92,100')
    const [firstHigh, setFirstHigh] = useState('More than $92,100')

    if (sizeOfFamily === 'Two') {
        setFirstMid('$26,001 to $92,100')
        setFirstHigh('More than $92,100')
        income_amounts.set('lowMid', '$26,001 to $43,000')
        income_amounts.set('midMid', '$43,001 to $65,000')
        income_amounts.set('highMid', '$65,000 to $92,100')
    }

    if (sizeOfFamily === 'Three') {
        setFirstMid('$26,001 to $94,400')
        setFirstHigh('More than $94,400')
        income_amounts.set('lowMid', '$26,001 to $48,500')
        income_amounts.set('midMid', '$48,500 to $65,000')
        income_amounts.set('highMid', '$65,000 to $94,400')
    }

    if (sizeOfFamily === 'Four') {
        setFirstMid('$26,001 to $102,500')
        setFirstHigh('More than $102,500')
        income_amounts.set('lowMid', '$26,001 to $53,900')
        income_amounts.set('midMid', '$53,900 to $65,000')
        income_amounts.set('highMid', '$65,000 to $102,500')
    }

    if (sizeOfFamily === 'Five') {
        setFirstMid('$26,001 to $109,900')
        setFirstHigh('More than $109,900')
        income_amounts.set('lowMid', '$26,001 to $60,300')
        income_amounts.set('midMid', '$60,300 to $65,000')
        income_amounts.set('highMid', '$65,000 to $109,900')
    }

    if (sizeOfFamily === 'Six or more') {
        setFirstMid('$26,001 to $118,500')
        setFirstHigh('More than $118,500')
        income_amounts.set('lowMid', '$26,001 to $65,000')
        income_amounts.set('midMid', '$65,000 to $118,500')
    }



    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                How much does your family make each year?
            </Text>
            <View style={styles.questions}>
                <View style={styles.question}>
                    <TouchableHighlight 
                        style={first_button}
                        onPress={() => 
                            {if (firstButtonPress === 'unclicked'){
                                setFirstButtonPress('clicked')
                                setSecondButtonPress('unclicked')
                                setThirdButtonPress('unclicked')
                                setFamilyIncome('a')
                            }
                            {if (firstButtonPress === 'clicked') {
                                setFirstButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={first_text}>$26,000 or less</Text>   
                    </TouchableHighlight>
                </View>
                <View style={styles.question}>
                    <TouchableHighlight 
                        style={second_button}
                        onPress={() => 
                            {if (secondButtonPress === 'unclicked'){
                                setSecondButtonPress('clicked')
                                setFirstButtonPress('unclicked')
                                setThirdButtonPress('unclicked')
                                setFamilyIncome('b')
                            }
                            {if (secondButtonPress === 'clicked') {
                                setSecondButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={second_text}>{firstMid}</Text>   
                    </TouchableHighlight>
                </View>
                <View style={styles.question}>
                    <TouchableHighlight 
                        style={third_button}
                        onPress={() => 
                            {if (thirdButtonPress === 'unclicked'){
                                setThirdButtonPress('clicked')
                                setSecondButtonPress('unclicked')
                                setFirstButtonPress('unclicked')
                                setFamilyIncome('c')
                            }
                            {if (thirdButtonPress === 'clicked') {
                                setThirdButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={third_text}>{firstHigh}</Text>   
                </TouchableHighlight>
                </View>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={() => {
                        if (familyIncome != 'b') {
                            props.navigation.navigate("EnrollmentType", {user_data, income_amounts})
                            user_data.set('familyIncome', familyIncome),
                        ``}
                        else {
                            props.navigation.navigate("FamIncome2", {user_data, income_amounts})
                        }
                    }}
                >
                    <Ionicons name="ios-arrow-round-forward" size={normalize(120)} color="black" />
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
    questions: {
        paddingTop: normalize(20),
        paddingBottom: normalize(35),
        flex: 1
    },
    question: {
        paddingTop: normalize(10),
        paddingBottom: normalize(10),
    },
    questionText: {
        fontSize: 35,
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'

    },
    unclickedText: {
        color:'#5FA3B5',
        textAlign:'center',
        fontSize: 25
    },
    clickedText: {
        color:'#fff',
        textAlign:'center',
        fontSize: 25
    },
    clickedButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        paddingTop:30,
        paddingBottom:30,
        borderRadius:80,
        borderWidth: 10,
        borderColor: '#5FA3B5',
        backgroundColor: '#5FA3B5'
    },
    unclickedButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        paddingTop:30,
        paddingBottom:30,
        borderRadius:80,
        borderWidth: 10,
        borderColor: '#5FA3B5'
    },
    arrow: {
        alignItems: 'flex-end',
        marginRight: normalize(10)
    }
  });
  
  