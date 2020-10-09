import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
//import {Feather} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import normalize from "../../normalizeSize.js";



const HomeScreen = (props) => { // change screen name
    const user_data = new Map();
    
    return (
       <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/4cfz19.gif')}/>
        <Text style={styles.text}>My College Cash</Text>
        <View style={styles.arrow}>
            <TouchableOpacity
                    onPress={() => props.navigation.navigate('IntroQuestion', {user_data})}
                >
                    <Ionicons name="ios-arrow-round-forward" size={normalize(160)} color="black" />
            </TouchableOpacity>
        </View>
       </View>
   )
};


//<TouchableOpacity onPress={() => props.navigation.navigate('IntroQuestion', {user_data})}>
//   <Feather style={styles.icon} name="arrow-right-circle"/>
//</TouchableOpacity>

 
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
    marginTop: 100,
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
  },
  arrow: {
    alignItems: 'flex-end',
    marginRight: 10
}
 
});
 
export default HomeScreen; //change screen name
