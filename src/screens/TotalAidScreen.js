import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";

const TotalAidScreen = (props) => { // change screen name
    const user_data = props.navigation.getParam('user_data');

   return (
       <View style={styles.container}>
       <Text style={styles.text}>Your total aid is: </Text>
       <TouchableOpacity onPress={() => props.navigation.navigate('Results', {user_data})} style={styles.outerButton}><Text style={styles.button}>See my breakdown</Text></TouchableOpacity>
       </View>
   )
};
 
 
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
 
export default TotalAidScreen; //change screen name
