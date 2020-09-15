import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

const HomeScreen = (props) => { // change screen name
    const user_data = new Map();
    
    return (
       <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/4cfz19.gif')}/>
        <Text style={styles.text}>My College Cash</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('IntroQuestion', {user_data})}>
            <Feather style={styles.icon} name="arrow-right-circle"/>
        </TouchableOpacity>
       </View>
   )
};
 
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    paddingBottom: 100
  },
  image: {
    width: 300,
    height: 400,
    paddingBottom:200,
  },
  text: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
    margin:10,
    paddingTop: 40
  },
  icon: {
    fontSize:50,
    position: 'absolute',
    bottom: -150,
    left: 100
  }
 
});
 
export default HomeScreen; //change screen name
