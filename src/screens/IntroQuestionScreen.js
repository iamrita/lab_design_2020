import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import {Feather} from '@expo/vector-icons'
import normalize from "../../normalizeSize";
import { Ionicons } from '@expo/vector-icons'; 


const IntroQuestionScreen = (props) => { // change screen name
    const user_data = props.navigation.getParam('user_data')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    const DismissKeyboard = ({children}) => (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
    )
    
    return (
       <View style={styles.container}>
        
        <Image style={styles.image} source={require('../../assets/money.gif')}/>
        <Text elevation={5} style={styles.text1}>Let's get you cash for college!</Text>

        <Text style={styles.text2}>First Name</Text>
     
        <TextInput style={styles.nameInput} autoCorrect={false} value={name}
        onChangeText={(userInput) => 
            setName(userInput)
        }
        />
    
        <Text style={styles.text2}>Email</Text>
        <TextInput style={styles.nameInput} autoCapitalize={"none"} autoCorrect={false} value={email}
            onChangeText={(userInput) => 
                setEmail(userInput)
        }
        />

        <View style={styles.arrow}>
        <TouchableOpacity onPress={() => {
                    user_data.set('name', name),
                    user_data.set('email', email),
                    name.trim() !== "" && email.trim() !== "" ? props.navigation.navigate('Welcome', {user_data}) : null}
            }>
                    <Ionicons name="ios-arrow-round-forward" style={styles.icon} size={normalize(120)} color="black" />
            </TouchableOpacity>
        </View>
        

        <Text style={styles.disclaimer}>*We will not share your personal information with anyone</Text>

       </View>
   )
};
 
//<View style={styles.arrow}>
//<TouchableOpacity onPress={() => {
        //user_data.set('name', name),
        //user_data.set('email', email),
        //name.trim() !== "" && email.trim() !== "" ? props.navigation.navigate('Welcome', {user_data}) : null}
//}>
        //<Feather style={styles.icon} name="arrow-right-circle"/>
//</TouchableOpacity>
//</View>
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    padding:10,
    flex: 1
  },
  text1: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
    marginLeft: 25,
    marginRight: 25,
    marginTop:20,
    marginBottom: 30,
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
  },
  text2: {
    fontFamily: 'Hoefler Text',
    fontWeight:'bold',
    fontSize:45,
    marginLeft:25,
    marginRight:25,
    marginTop:30,
    color: '#A32934'

  },
  icon: {
    fontSize:50,
    marginTop: 25, 
    marginRight: 20,
    alignItems: "flex-end"
  },
  nameInput: {
      borderBottomWidth:1,
      width: '80%',
      margin:25,
      fontSize:30
    },
  disclaimer: {
      color: 'gray',
      fontFamily: 'Hoefler Text',
      fontSize: 20,
      margin: 25
    },
  arrow: {
    alignItems: 'flex-end',
    flex: 0.8,
    marginRight: normalize(10),
    //marginTop: normalize(10),
    marginLeft: normalize(200)
    //marginBottom: normalize(100)
    //paddingBottom: normalize(30)
    },
    icon: {
        paddingBottom: normalize(400)
    }
});
 
export default IntroQuestionScreen; //change screen name
