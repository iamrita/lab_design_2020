import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import DropDownPicker from 'react-native-dropdown-picker';



export default function SizeOfFamily( props ) {
    const [sizeOfFamily, setSizeOfFamily] = useState('');
    var family_sizes = ["Two", "Three", "Four", "Five", "Six or more"];


    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                How much are you thinking of working in college?
            </Text>
            <View style={styles.questions}>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={sizeOfFamily}
                        mode='dropdown'
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSizeOfFamily(itemValue)}
                    >                    
                        {family_sizes.map((item, index) => {
                            return (<Picker.Item label={item} value={index} key={index}/>) 
                        })}
                    </Picker>
                </View>
            </View>
            <View style={styles.arrow}>
                <TouchableOpacity
                    onPress={() => 
                        props.navigation.navigate("EnrollmentType")
                    }
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
    }
  });
  
  