import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';  

const original_employment = 'a'

export default function EnrollmentType( props ) {
    const user_data = props.navigation.getParam('user_data');
    const [enrollmentType, setEnrollmentType] = useState(original_employment)
    const [firstButtonPress, setFirstButtonPress] = useState('unclicked')
    const [secondButtonPress, setSecondButtonPress] = useState('unclicked')
    const [thirdButtonPress, setThirdButtonPress] = useState('unclicked')

    const first_button = firstButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const first_text = firstButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const second_button = secondButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const second_text = secondButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const third_button = thirdButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const third_text = thirdButtonPress === 'clicked'? styles.clickedText : styles.unclickedText

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                What type of college enrollment are you considering?
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
                                setEnrollmentType('a')
                            }
                            {if (firstButtonPress === 'clicked') {
                                setFirstButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={first_text}>Full-Time</Text>   
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
                                setEnrollmentType('b')
                            }
                            {if (secondButtonPress === 'clicked') {
                                setSecondButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={second_text}>Half-Time</Text>   
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
                                setEnrollmentType('c')
                            }
                            {if (thirdButtonPress === 'clicked') {
                                setThirdButtonPress('unclicked')
                            }
                        }}
                        }>
                        <Text style={third_text}>Less than Half-Time</Text>   
                </TouchableHighlight>
                </View>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={() => {
                        user_data.set('enrollmentType', enrollmentType),
                        props.navigation.navigate("CollegeWork", {user_data})
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
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold',
        paddingLeft: normalize(5)
    },
    unclickedText: {
        color:'#A32934',
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
        borderColor: '#A32934',
        backgroundColor: '#A32934'
    },
    unclickedButton: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        paddingTop:30,
        paddingBottom:30,
        borderRadius:80,
        borderWidth: 10,
        borderColor: '#A32934'
    },
    arrow: {
        alignItems: 'flex-end',
        marginRight: normalize(10)
    }
  });
  
  