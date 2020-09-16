import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FamilialIncome1 from "./FamilialIncome1.js";

const original_gpa = '3.0 or more'
const original_college = 'UC'

export default function StateResults( props ) {
    const user_results = props.navigation.getParam('user_results');

    const stateAid = user_results.get('stateAid')
    const stateAidAmount = user_results.get('stateAidAmount')

    
    const [gpa, setGpa] = useState(original_gpa);
    const [college, setCollege] = useState(original_college);

    return (
        <View style={styles.container}>
             <Text style={styles.titleText}>
                State Grants
            </Text>
            <View style={styles.pickerView}>
                <Text style={styles.pickerText}>GPA</Text>
                <RNPickerSelect
                    value={gpa}
                    placeholder={{
                        label: '3.0 or more', 
                        value: '3.0 or more',
                    }}
                    onValueChange={item => setGpa(item.value)}
                    items={[
                        //{label: '3.0 or more', value: '3.0 or more'},
                        {label: 'Between 2.0 and 3.0', value: 'Between 2.0 and 3.0'},
                        {label: 'Lower than 2.0', value: 'Lower than 2.0'},
                    ]}
                    style={styles.pickerStyles}
                    Icon={() => {
                        return <Chevron style={styles.chevron} size={2.5} color="black" />;
                      }}
                />
            </View>
            <View style={styles.pickerView}>
                <Text style={styles.pickerText}>College System</Text>
                <RNPickerSelect
                    value={college}
                    placeholder={{
                        label: 'UC', 
                        value: 'UC',
                    }}
                    onValueChange={item => setCollege(item.value)}
                    items={[
                        //{label: 'UC', value: 'UC'},
                        {label: 'CSU', value: 'CSU'},
                        {label: 'Private College', value: 'Private College'},
                    ]}
                    style={styles.pickerStyles}
                    Icon={() => {
                        return <Chevron style={styles.chevron} size={2.5} color="black" />;
                      }}
                />
            </View>
            <View style={styles.results}>
                <Text style={styles.firstSubtext}>
                    You are eligible for up to:
                </Text>
                <View style={styles.numberBox}>
                    <Text style={styles.number}>
                        $12,750
                    </Text>
                </View>
                <Text style={styles.secondSubtext}>
                    through Cal Grants! And community college would be free!
                </Text>
            </View>
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


/*
                <View style={styles.numberBox}>
                    {
                        (((stateAid === 'a') | (stateAid === 'b')) && (college === 'UC') && (gpa === '3.0 or more')) &&
                            <Text style={styles.number}>
                                $12,750
                            </Text>
                    }
                    {
                       (((stateAid === 'a') | (stateAid === 'b')) && (college === 'CSU') && (gpa === '3.0 or more')) &&
                        <Text style={styles.number}>
                            $5,742
                        </Text>                     
                    }
                    {
                       (((stateAid === 'a') | (stateAid === 'b')) && (college === 'Private College') && (gpa === '3.0 or more')) &&
                        <Text style={styles.number}>
                            $9,084
                        </Text>                     
                    }
                                        {
                       ((stateAid === 'a') && (gpa === 'Between 2.0 and 3.0')) &&
                        <Text style={styles.number}>
                            $1,672
                        </Text>                     
                    }
                    {
                       (((stateAid === 'a') && (gpa === 'Lower than 2.0')) |  ((stateAid === 'b') && ((gpa === 'Lower than 2.0') | (gpa === 'Between 2.0 and 3.0')))) &&
                        <Text style={styles.number}>
                            $1,094
                        </Text>                     
                    }
                    {
                       (stateAid === 'c') &&
                        <Text style={styles.number}>
                            $5,028
                        </Text>                     
                    }
                </View>

*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "space-between",
        paddingTop: normalize(70),
    },
    results: {
        paddingTop: normalize(30),
        paddingBottom: normalize(50),
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
    firstSubtext: {
        fontSize: normalize(20),
        textAlign: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        paddingBottom: normalize(20),
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
        paddingTop: normalize(20),
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    pickerText: {
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold',
        fontSize: normalize(20),
        textAlign: 'center',
        paddingBottom: normalize(10),
        paddingTop: normalize(10)
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
        flex: 0.4,
        alignItems: 'flex-end'
    },
    leftArrow: {
        alignItems: 'flex-start',
        marginLeft: normalize(10)
    },
    rightArrow: {
        alignItems: 'flex-end',
        marginRight: normalize(10),
    },
    pickerView: {
        paddingTop: normalize(20)
    },
    pickerStyles: {
        placeholder: {
            color: 'black',
            fontSize: normalize(16),
            textAlign: 'center'
        },
        inputIOS: {
            fontSize: normalize(16),
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 4,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center'
          },
          inputAndroid: {
            fontSize: normalize(16),
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 4,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center'
          },
    },
    chevron: {
        marginRight: normalize(20),
        marginTop: normalize(15),
        marginBottom: normalize(15),
    }
  });

