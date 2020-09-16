import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";

const TotalAidScreen = (props) => { // change screen name
    const user_data = props.navigation.getParam('user_data');
    const user_results = props.navigation.getParam('user_results')

    const familyIncome = user_data.get('familyIncome')
    const sizeOfFamily = user_data.get('sizeOfFamily')
    const collegeWork = user_data.get('collegeWork')
    const enrollmentType = user_data.get('enrollmentType')

    federalAid = user_results.get('federalAid')
    federalAidAmount = user_results.get('federalAidAmount')
    stateAid = user_results.get('stateAid')
    stateAidAmount = user_results.get('stateAidAmount')
    otherAid = user_results.get('otherAid')
    federalAidAmount = user_results.get('otherAidAmount')
    eitcAid = user_results.get('eitcAid')
    federalAidAmount = user_results.get('eitcAidAmount')
    totalAid = props.navigation.getParam('totalAid')


    console.log('federal aid amount', federalAidAmount)


    return (
       <View style={styles.container}>
            <Text style={styles.text1}>Congrats Future College Grad!</Text>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={require('../../assets/gradcaps.jpg')}/>
            </View>
            <Text style={styles.text2}>Your total aid is:</Text>
                <Text style={styles.number}>
                {totalAid}
                </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Results', {user_data, user_results})} style={styles.outerButton}>
                <Text style={styles.button}>See my breakdown</Text>
            </TouchableOpacity>
       </View>
   )
};
 



    //const user_results = new Map();

    //// calculate federal aid eligibility
    //if (familyIncome === 'a') {
    //    user_results.set('federalAid', 'a')
    //}

    //if ((familyIncome === 'd') | (familyIncome === 'e')) {
    //    user_results.set('federalAid', 'b')
    //}

    //if ((familyIncome === 'f') | (familyIncome === 'c')) {
    //    user_results.set('federalAid', 'c')
    //}

    //// calculate state aid eligibility

    //if ((familyIncome === 'a') | (familyIncome === 'd')) {
    //    user_results.set('stateAid', 'a')
    //}

    //if ((familyIncome === 'e') | (familyIncome === 'f') | (familyIncome === 'g')) {
    //    user_results.set('stateAid', 'b')
    //}

    //if (familyIncome === 'c') {
    //    user_results.set('stateAid', 'c')
    //}

    //// calculate other aid eligibility 

    //if ((enrollmentType === 'c') | (collegeWork === 'b')) {
    //    user_results.set('otherAid', 'a')
    //}

    //if (((enrollmentType === 'a') | (enrollmentType === 'b'))  && ((collegeWork === 'a') | (collegeWork === 'c'))) {

    //    if ((familyIncome === 'a') | (familyIncome === 'd')) {
    //        user_results.set('otherAid', 'b')
    //    }
    //    else {
    //        user_results.set('otherAid', 'c')
    //    }
    //}

 
/*{<TouchableOpacity onPress={() => {
    {((user_results.get('federalAid') === 'a') && ((user_results.get('stateAid') === 'a') | (user_results.get('stateAid') === 'b')) && ((user_results.get('otherAid') === 'a') | (user_results.get('otherAid') === 'c'))) && 
        setTotalAid('$18,765')
    }
    {((user_results.get('federalAid') === 'a') && ((user_results.get('stateAid') === 'a') | (user_results.get('stateAid') === 'b')) && (user_results.get('otherAid') === 'b')) &&
        setTotalAid('$24,873')
    }
    {((user_results.get('federalAid') === 'a') && (user_results.get('stateAid') === 'a') && ((user_results.get('otherAid') === 'a') | (user_results.get('otherAid') === 'c'))) &&
        setTotalAid('$18,765')
    }
}}
>
    <Text style={styles.button}>{totalAid}
    </Text>
    </TouchableOpacity>}*/

    //<View style={styles.container}>
    //        <Text style={styles.text}>Your total aid is:</Text>
    //        <Text style={styles.text}>$18,765</Text>
    //        <TouchableOpacity onPress={() => props.navigation.navigate('Results', {user_data, user_results})} style={styles.outerButton}>
    //            <Text style={styles.button}>See my breakdown</Text>
    //        </TouchableOpacity>
    //</View>


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    padding:10
  },
  text2: {
    fontFamily: 'Hoefler Text',
    fontSize:20,
    margin:25,
    textAlign:'center',
    color: 'gray'
  },
  text1: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
    margin:25,
    textAlign:'center',
    paddingTop: 40,
  },
  text2: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:35,
    margin:25,
    textAlign:'center'
  },
  number: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:60,
    margin:25,
    textAlign:'center'
  },
  button: { 
    color: 'white',
    fontFamily: 'Hoefler Text',
    fontSize: 20,
  },
  outerButton: {
    backgroundColor:"#A32934",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#A32934",
    padding:20,
  },
  image: {
    paddingTop: 120,
    width: 350,
    height: 300,
    paddingBottom:200,
    paddingRight: 50,
    paddingLeft: 50
  },
});
 
export default TotalAidScreen; //change screen name
