import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';

const original_size = 'Two'

const sizes = ['Two', 'Three', 'Four', 'Five', 'Six or More']
const firstMids = ['$26,001 to $92,100', '$26,001 to $94,400', '$26,001 to $102,500', '$26,001 to $109,900', '$26,001 to $118,500']
const firstHighs = ['More than $92,100', 'More than $94,400', 'More than $102,500', 'More than $109,900', 'More than $118,500']
const lowMids = ['$26,001 to $43,000', '$26,001 to $48,500', '$26,001 to $53,900', '$26,001 to $60,300', '$26,001 to $65,000']
const midMids = ['$43,001 to $65,000', '$48,500 to $65,000', '$53,900 to $65,000', '$60,300 to $65,000', '$65,000 to $118,500']
const highMids = ['$65,000 to $92,100', '$65,000 to $94,400', '$65,000 to $102,500', '$65,000 to $109,900', 'None']


function determine_income_amounts (sizeOfFamily, income_amounts_map) {


    const curr_index = sizes.findIndex(size => size === sizeOfFamily);

    income_amounts_map.set('firstMid', firstMids[curr_index])
    income_amounts_map.set('firstHigh', firstHighs[curr_index])
    income_amounts_map.set('lowMids', lowMids[curr_index])
    income_amounts_map.set('midMid', midMids[curr_index])
    income_amounts_map.set('highMid', highMids[curr_index])

    return income_amounts_map



    //if (sizeOfFamily === 'Two') {
    //    income_amounts.set('firstMid','$26,001 to $92,100')
    //    income_amounts.set('firstHigh','More than $92,100')
    //    income_amounts.set('lowMid', '$26,001 to $43,000')
    //    income_amounts.set('midMid', '$43,001 to $65,000')
    //    income_amounts.set('highMid', '$65,000 to $92,100')
    //}

    //if (sizeOfFamily === 'Three') {
    //    income_amounts.set('firstMid','$26,001 to $94,400')
    //    income_amounts.set('firstHigh','More than $94,400')
    //    income_amounts.set('lowMid', '$26,001 to $48,500')
    //    income_amounts.set('midMid', '$48,500 to $65,000')
    //    income_amounts.set('highMid', '$65,000 to $94,400')
    //}

    //if (sizeOfFamily === 'Four') {
    //    income_amounts.set('firstMid','$26,001 to $102,500')
    //    income_amounts.set('firstHigh','More than $102,500')
    //    income_amounts.set('lowMid', '$26,001 to $53,900')
    //    income_amounts.set('midMid', '$53,900 to $65,000')
    //    income_amounts.set('highMid', '$65,000 to $102,500')
    //}

    //if (sizeOfFamily === 'Five') {
    //    income_amounts.set('firstMid','$26,001 to $109,900')
    //    income_amounts.set('firstHigh','More than $109,900')
    //    income_amounts.set('lowMid', '$26,001 to $60,300')
    //    income_amounts.set('midMid', '$60,300 to $65,000')
    //    income_amounts.set('highMid', '$65,000 to $109,900')
    //}

    //if (sizeOfFamily === 'Six or more') {
    //    income_amounts.set('firstMid', '$26,001 to $118,500')
    //    income_amounts.set('firstHigh', 'More than $118,500')
    //    income_amounts.set('lowMid', '$26,001 to $65,000')
    //    income_amounts.set('midMid', '$65,000 to $118,500')
    //}
}

export default function SizeOfFamily( props ) {
    const user_data = props.navigation.getParam('user_data');
    const [sizeOfFamily, setSizeOfFamily] = useState(original_size);
    //var family_sizes = ["Two", "Three", "Four", "Five", "Six or more"];
    const income_amounts_map = new Map();

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                What is the total number of people in your family, including you?
            </Text>
            <View style={styles.questions}>
                <View style={styles.pickerView}>
                    <RNPickerSelect
                        value={sizeOfFamily}
                        placeholder={{
                            label: 'Two', 
                            value: 'Two',
                        }}
                        onValueChange={item => setSizeOfFamily(item.value)}
                        items={[
                            {label: 'Three', value: 'Three'},
                            {label: 'Four', value: 'Four'},
                            {label: 'Five', value: 'Five'},
                            {label: 'Six or more', value: 'Six or more'},
                        ]}
                        style={styles.pickerStyles}
                        Icon={() => {
                            return <Chevron style={styles.chevron} size={4} color="black" />;
                        }}
                    />
                </View>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={async() => {
                        income_amounts = await determine_income_amounts (sizeOfFamily, income_amounts_map)
                        user_data.set('sizeOfFamily', sizeOfFamily),
                        props.navigation.navigate("FamIncome1", {user_data, income_amounts})
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
        flex: 1,
        justifyContent: 'center'
    },
    question: {
        paddingTop: normalize(10),
        paddingBottom: normalize(10),
        flex: 1,
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
    },
    pickerStyles: {
        placeholder: {
            color: 'black',
            fontSize: 30,
            textAlign: 'center'
        },
        inputIOS: {
            fontSize: 30,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderWidth: 8,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center',
          },
          inputAndroid: {
            fontSize: 30,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderWidth: 8,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center',
          },
    },
    chevron: {
        marginRight: normalize(20),
        marginTop: normalize(25),
        marginBottom: normalize(25),
    },
    pickerView: {
        paddingRight: normalize(30),
        paddingLeft: normalize(30),
        paddingBottom: normalize(60)
    },
  });
  
  