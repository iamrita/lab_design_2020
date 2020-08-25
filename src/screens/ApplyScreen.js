import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";

const ApplyScreen = (props) => { // change screen name
   return (
       <View style={styles.container}>
       <Text style={styles.text}>Apply</Text>
       <Image style={styles.image} source={require('../../assets/studying.png')}/>
       <TouchableOpacity onPress={() => props.navigation.navigate('TotalAid')} style={styles.outerButton}><Text style={styles.button}>Click Here</Text></TouchableOpacity>
       <Text style={styles.text2}>
           *Remember, this is a rough estimate. To get more exact amounts, fill out 
           the FAFSA and any official applications for state and food assitance.
       </Text>
       </View>
   )
};
 
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    padding:50
  },
  text2: {
    fontFamily: 'Hoefler Text',
    fontSize:20,
    margin:25,
    textAlign:'center',
    color: 'gray'
  },
  text: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
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
    width: 300,
    height: 400,
  }
 
  
 
});
 
export default ApplyScreen; //change screen name
