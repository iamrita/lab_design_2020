import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function StateResults( props ) {
    const [gpa, setGpa] = useState('');
    const [college, setCollege] = useState('');


    gpa_array = ['3.0 or more', 'Between 2.0 and 3.0', 'Lower than 2.0']
    college_array = ['UC System', 'CSU System', 'Private College']


    return (
        <View style={styles.container}>
             <Text style={styles.titleText}>
                State Grants
            </Text>
            <View style={styles.pickerView}>
                <Text style={styles.pickerText}>GPA</Text>
                <DropDownPicker
                    items={[
                        {label: '3.0 or more', value: '3.0 or more'},
                        {label: 'Between 2.0 and 3.0', value: 'Between 2.0 and 3.0'},
                        {label: 'Lower than 2.0', value: 'Lower than 2.0'},
                    ]}
                    defaultValue={gpa}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    labelStyle={{
                        fontSize: normalize(20),
                        textAlign: 'center',
                        color: '#000'
                    }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setGpa(item.value)
                    }
                />
            </View>
            <View style={styles.pickerView}>
                <Text style={styles.pickerText}>College System</Text>
                <DropDownPicker
                    items={[
                        {label: 'UC', value: 'UC'},
                        {label: 'CSU', value: 'CSU'},
                        {label: 'Private College', value: 'Private College'},
                    ]}
                    defaultValue={college}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    labelStyle={{
                        fontSize: normalize(20),
                        textAlign: 'center',
                        color: '#000'
                    }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setCollege(item.value)
                    }
                />
            </View>
            <View style={styles.results}>
                <Text style={styles.firstSubtext}>
                    You are eligible for up to:
                </Text>
                <View style={styles.numberBox}>
                    <Text style={styles.number}>
                        $12,570 
                    </Text>
                </View>
                <Text style={styles.secondSubtext}>
                    through the Pell Grant!
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
                    <Text style={styles.nextSteps}>Next Steps</Text>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate("Apply")
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
    pickerText: {
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold',
        fontSize: normalize(25),
        textAlign: 'center'
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
    }
  });

