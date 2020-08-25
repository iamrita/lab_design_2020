import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

const IntroQuestionScreen = (props) => { // change screen name
    const user_data = props.navigation.getParam('user_data')
    
    return (
       <View style={styles.container}>
        
        <Image style={styles.image} source={require('../../assets/money.gif')}/>
        <Text elevation={5} style={styles.text}>Let's get you cash for college!</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('Knowledge', {user_data})}>
            <Feather style={styles.icon} name="arrow-right-circle"/>
        </TouchableOpacity>

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
    marginLeft: 25,
    marginRight: 25,
    marginTop:100
  },
  icon: {
    fontSize:50,
    position: 'absolute',
    bottom: -340,
    left: 100
  },
  image: {
    width: 400,
    height: 151,
  }
  
 
});
 
export default IntroQuestionScreen; //change screen name
