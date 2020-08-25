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

export default function SizeOfFamily( props ) {
    const user_data = props.navigation.getParam('user_data');
    const [sizeOfFamily, setSizeOfFamily] = useState(original_size);
    //var family_sizes = ["Two", "Three", "Four", "Five", "Six or more"];


    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                How much are you thinking of working in college?
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
                    onPress={() => {
                        user_data.set('sizeOfFamily', sizeOfFamily),
                        props.navigation.navigate("FamIncome1", {user_data})
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
            fontSize: 35,
            textAlign: 'center'
        },
        inputIOS: {
            fontSize: 35,
            paddingVertical: 40,
            paddingHorizontal: 20,
            borderWidth: 8,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center'
          },
          inputAndroid: {
            fontSize: 35,
            paddingVertical: 40,
            paddingHorizontal: 20,
            borderWidth: 8,
            borderColor: '#5FA3B5',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
            textAlign: 'center'
          },
    },
    chevron: {
        marginRight: normalize(20),
        marginTop: normalize(45),
        marginBottom: normalize(45),
    }
  });
  
  