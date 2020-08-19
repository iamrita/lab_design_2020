import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

const HomeScreen = () => { // change screen name
   return (
       <View style={styles.container}>
        
        <Text style={styles.text}>Let's find you money for college!</Text>
        <Text style={styles.text2}>Did you know that 85% of college students receive financial aid to pay for college?</Text>

       </View>
   )
};
 
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    padding:10
  },
  text: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,

  },
  text2: {
    fontFamily: 'Hoefler Text',
    color: 'gray',
    fontSize:40,
  }
 
});
 
export default HomeScreen; //change screen name
