import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import normalize from "../../normalizeSize";

const WelcomeScreen = (props) => { // change screen name
  const user_data = props.navigation.getParam('user_data');
  const user_data_name = user_data.get('name')

   return (
       <View style={styles.container}>
           <View>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.text}>{user_data_name}!</Text>
           </View>
            <Image style={styles.image} source={require('../../assets/group_of_students.jpg')}/>

            <TouchableOpacity onPress={() => props.navigation.navigate('SizeOfFamily', {user_data})}style={styles.outerButton}><Text style={styles.button}>Get me my college cash!</Text></TouchableOpacity>
        
       </View>
   )
};
 
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: '100%',
    paddingTop:normalize(70),
    paddingBottom: normalize(100)
  },
  text: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
    marginLeft:25,
    marginRight:25,
    textAlign:'center',
    marginBottom: 20,
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
    paddingTop: 120,
    width: 400,
    height: 100,
    paddingBottom:250,
  }
 
  
 
});
 
export default WelcomeScreen; //change screen name
