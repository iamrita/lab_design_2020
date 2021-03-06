import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import SizeOfFamily from "./SizeOfFamily.js";

const original_work = 'a'


function calc_fed_aid(familyIncome, user_results, fedAid, setFedAid, setTotalAid, totalAid) {
    if (familyIncome === 'a') {
        user_results.set('federalAid', 'a')
        user_results.set('federalAidAmount', '$6,195')
        setTotalAid(totalAid + 6195)
        setFedAid(6195)
        console.log('fed aid gets here')
    }

    if ((familyIncome === 'd') | (familyIncome === 'e')) {
        user_results.set('federalAid', 'b')
        user_results.set('federalAidAmount', '$3,000')
        setFedAid(3000)
        setTotalAid(totalAid + 3000)
    }

    if ((familyIncome === 'f') | (familyIncome === 'c')) {
        user_results.set('federalAid', 'c')
        user_results.set('federalAidAmount', '$350')
        setFedAid(300)
        setTotalAid(totalAid + 350)
    }

    return fedAid
}



function calc_state_aid(familyIncome, user_results, stateAid, setStateAid, setTotalAid, totalAid) {
    if ((familyIncome === 'a') | (familyIncome === 'd')) {
        user_results.set('stateAid', 'a')
        user_results.set('stateAidAmount', '$12,570')
        setStateAid(12570)
        setTotalAid(totalAid + 12570)
        console.log('state aid gets here')
    }

    if ((familyIncome === 'e') | (familyIncome === 'f') | (familyIncome === 'g')) {
        user_results.set('stateAid', 'b')
        user_results.set('stateAidAmount', '$12,570')
        setTotalAid(totalAid + 12570)
        setStateAid(12570)
    }

    if (familyIncome === 'c') {
        user_results.set('stateAid', 'c')
        user_results.set('stateAidAmount', '$5,028')
        setTotalAid(totalAid + 5028)
        setStateAid(5028)
    }

    return stateAid
}


function calc_eitc_aid(familyIncome, user_results, eitcAid, setEitcAid, setTotalAid, totalAid) {

    if ((familyIncome === 'a') | (familyIncome === 'd')) {
        user_results.set('eitcAid', 'a')
        user_results.set('eitcAidAmount', '$3,141')
        setTotalAid(totalAid + 3141)
        setEitcAid(3141)
        console.log('eitc gets here')
    }
    if (familyIncome === 'e') {
        user_results.set('eitcAid', 'b')
        user_results.set('eitcAidAmount', '$1000')
        setTotalAid(totalAid + 1000)
        setEitcAid(1000)
    }
    if ((familyIncome === 'b') | (familyIncome === 'c') | (familyIncome === 'f')) {
        user_results.set('eitcAid', 'c')
        user_results.set('eitcAidAmount', '$0')
        setEitcAid(0)
    }
    return eitcAid
}

function calc_other_aid(familyIncome, user_results, collegeWork, enrollmentType, otherAid, setOtherAid, setTotalAid, totalAid) {
    if ((collegeWork === 'a') | (collegeWork === 'b')) {
        user_results.set('otherAid', 'a')
        user_results.set('otherAidAmount', '$0')
        setTotalAid(totalAid)
        setOtherAid(0)
    }

    if (collegeWork === 'c') {

        if (enrollmentType === 'c') {
            user_results.set('otherAid', 'a')
            user_results.set('otherAidAmount', '$0')
            setTotalAid(totalAid)
            setOtherAid(0)
        }
        if ((enrollmentType === 'a') | (enrollmentType === 'b')) {

            if ((familyIncome === 'a') | (familyIncome === 'd')) {
                user_results.set('otherAid', 'b')

                if (sizeOfFamily === 'Two') {
                    user_results.set('otherAidAmount', '$4,260')
                    setTotalAid(totalAid + 4260)
                    setOtherAid(4260)
                }
                if (sizeOfFamily === 'Three') {
                    user_results.set('otherAidAmount', '$6,108')
                    setTotalAid(totalAid + 6108)
                    setOtherAid(6108)
                }
                if (sizeOfFamily === 'Four') {
                    user_results.set('otherAidAmount', '$7,752')
                    setTotalAid(totalAid + 7752)
                    setOtherAid(7752)
                }
                if (sizeOfFamily === 'Five') {
                    user_results.set('otherAidAmount', '$9,216')
                    setTotalAid(totalAid + 9216)
                    setOtherAid(9216)
                }
                if (sizeOfFamily === 'Six or more') {
                    user_results.set('otherAidAmount', '$11,052')
                    setTotalAid(totalAid + 11052)
                    setOtherAid(11052)
                }
            }
            else {
                user_results.set('otherAid', 'c')
                user_results.set('otherAidAmount', '$0')
                setTotalAid(totalAid)
                setOtherAid(0)
            }
        }
    }
    return otherAid
}




export default function CollegeWork( props ) {
    const user_data = props.navigation.getParam('user_data');
    const [collegeWork, setCollegeWork] = useState(original_work)
    const [firstButtonPress, setFirstButtonPress] = useState('unclicked')
    const [secondButtonPress, setSecondButtonPress] = useState('unclicked')
    const [thirdButtonPress, setThirdButtonPress] = useState('unclicked')

    const first_button = firstButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const first_text = firstButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const second_button = secondButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const second_text = secondButtonPress === 'clicked'? styles.clickedText : styles.unclickedText
    const third_button = thirdButtonPress === 'clicked'? styles.clickedButton : styles.unclickedButton
    const third_text = thirdButtonPress === 'clicked'? styles.clickedText : styles.unclickedText

    const familyIncome = user_data.get('familyIncome')
    const sizeOfFamily = user_data.get('sizeOfFamily')
    const enrollmentType = user_data.get('enrollmentType')

    const user_results = new Map();
    
    const [totalAid, setTotalAid] = useState(0)
    const [fedAid, setFedAid] = useState(0)
    const [stateAid, setStateAid] = useState(0)
    const [eitcAid, setEitcAid] = useState(0)
    const [otherAid, setOtherAid] = useState(0)


    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                How much are you thinking of working in college?
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
                                setCollegeWork('a')
                            }
                            {if (firstButtonPress === 'clicked') {
                                setFirstButtonPress('unclicked')
                            }
                            user_results.set('totalAid', 
                                (calc_fed_aid(familyIncome, user_results, fedAid, setFedAid, setTotalAid, totalAid) + 
                                calc_state_aid(familyIncome, user_results, stateAid, setStateAid, setTotalAid, totalAid) +
                                calc_eitc_aid(familyIncome, user_results, eitcAid, setEitcAid, setTotalAid, totalAid) + 
                                calc_other_aid(familyIncome, user_results, collegeWork, enrollmentType, otherAid, setOtherAid, setTotalAid, totalAid))
                            )
                            console.log('calcfedAid', calc_fed_aid(familyIncome, user_results, fedAid, setFedAid, setTotalAid, totalAid))
                            console.log('calcstateAid', calc_state_aid(familyIncome, user_results, stateAid, setStateAid, setTotalAid, totalAid))
                            console.log('calceitcAid', calc_eitc_aid(familyIncome, user_results, eitcAid, setEitcAid, setTotalAid, totalAid))
                            console.log('calcotherAid', calc_other_aid(familyIncome, user_results, collegeWork, enrollmentType, otherAid, setOtherAid, setTotalAid, totalAid))

                        }}
                        }>
                        <Text style={first_text}>20 hours/week or more</Text>   
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
                                setCollegeWork('b')
                            }
                            {if (secondButtonPress === 'clicked') {
                                setSecondButtonPress('unclicked')
                            }
                            user_results.set('totalAid',
                                (calc_fed_aid(familyIncome, user_results, fedAid, setFedAid, setTotalAid, totalAid) + 
                                calc_state_aid(familyIncome, user_results, stateAid, setStateAid, setTotalAid, totalAid) +
                                calc_eitc_aid(familyIncome, user_results, eitcAid, setEitcAid, setTotalAid, totalAid) + 
                                calc_other_aid(familyIncome, user_results, collegeWork, enrollmentType, otherAid, setOtherAid, setTotalAid, totalAid))
                            )
                        }}
                        }>
                        <Text style={second_text}>Less than 20 hours/week</Text>   
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
                                setCollegeWork('c')
                            }
                            {if (thirdButtonPress === 'clicked') {
                                setThirdButtonPress('unclicked')
                            }
                            user_results.set('totalAid',
                                (calc_fed_aid(familyIncome, user_results, fedAid, setFedAid, setTotalAid, totalAid) + 
                                calc_state_aid(familyIncome, user_results, stateAid, setStateAid, setTotalAid, totalAid) +
                                calc_eitc_aid(familyIncome, user_results, eitcAid, setEitcAid, setTotalAid, totalAid) + 
                                calc_other_aid(familyIncome, user_results, collegeWork, enrollmentType, otherAid, setOtherAid, setTotalAid, totalAid))
                            )
                        }}
                        }>
                        <Text style={third_text}>Work Study Program</Text>   
                </TouchableHighlight>
                </View>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={() => {
                        setTotalAid(user_results.get('totalAid')),
                        console.log('when next tot aid', user_results.get('totalAid'))
                        user_data.set('collegeWork', collegeWork),
                        props.navigation.navigate("TotalAid", {user_data, user_results, totalAid})
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
  
  