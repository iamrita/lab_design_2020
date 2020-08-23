import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

const HomeScreen = (props) => { // change screen name
   return (
       <View style={styles.container}>
        
        <Text style={styles.text}>Let's get you cash for college!</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Knowledge')}><Feather style={styles.icon} name="arrow-right-circle"/></TouchableOpacity>

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
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 100

  },
  icon: {
    fontSize:50,
    position: 'absolute',
    bottom: -215,
    left: 100
  }
  
 
});
 
export default HomeScreen; //change screen name
