import React, {useState} from "react";
import { Text, StyleSheet, Button, TouchableHighlight, View, Image, Picker } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import normalize from "../../normalizeSize.js";
import {TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function FedResults( props ) {
    const user_data = props.navigation.getParam('user_data');
    //const user_results = props.navigation.getParam('user_results');

    //const federalAid = user_results.get('federalAid')


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Federal Grants
            </Text>
            <View style={styles.results}>
                <Text style={styles.firstSubtext}>
                    You are eligible for up to:
                </Text>
                <View style={styles.numberBox}>
                    <Text style={styles.number}>
                            $6,195
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

{/*<View style={styles.numberBox}>
{(federalAid === 'a') &&
   <Text style={styles.number}>
        $6,195
    </Text>
}
{(federalAid === 'b') &&
   <Text style={styles.number}>
        $3,000
    </Text>
}
{(federalAid === 'a') &&
   <Text style={styles.number}>
        $350
    </Text>
}

</View>*/}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "space-between",
        paddingTop: normalize(70),
    },
    results: {
        paddingTop: normalize(80),
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
    leftArrow: {
        alignItems: 'flex-start',
        marginLeft: normalize(10)
    },
    rightArrow: {
        alignItems: 'flex-end',
        marginRight: normalize(10)
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
        paddingTop: normalize(10),
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
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

