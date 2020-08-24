import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import {Feather, FontAwesome, Fontisto} from '@expo/vector-icons'

const ShareScreen = () => { // change screen name
   return (
       <View style={styles.container}>
       <View style={styles.option}>
       <Feather style={styles.icon} name="share"/>

       <Text style={styles.text}>Share with your parents</Text>
       </View>

       <View style={styles.option}>
       <FontAwesome style={styles.icon} name="calendar"/>

       <Text style={styles.text}>Make an appointment with a school counselor</Text>
       </View>
       <View style={styles.option}>
       <Fontisto style={styles.icon} name="persons"/>

       <Text style={styles.text}>Apply directly with an adult</Text>
       </View>
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
    
    fontSize:20,
    margin:25,
    flex: 1,
  },
  icon: {
    fontSize: 50,
    flex: 1
  },
  option: {
      flexDirection: 'row',
      padding: 50,
      alignItems: 'center'

  }
 
  
 
});
 
export default ShareScreen; //change screen name
