import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";

const WelcomeScreen = ({navigation}) => { // change screen name
  const firstName = navigation.getParam('name')
   return (
       <View style={styles.container}>
        
        <Text style={styles.text}>Welcome {firstName}!</Text>
        <Image style={styles.image} source={require('../../assets/student.png')}/>

        <TouchableOpacity style={styles.outerButton}><Text style={styles.button}>Get me my college cash!</Text></TouchableOpacity>
     

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
    marginTop: 50
  },
  image: {
    width: 300,
    height: 400,
    paddingBottom:200,
  }
 
  
 
});
 
export default WelcomeScreen; //change screen name