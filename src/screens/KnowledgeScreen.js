import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import {Feather} from '@expo/vector-icons'

const KnowledgeScreen = (props) => { // change screen name
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const user_data = props.navigation.getParam('user_data')

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
  )
   return (
       <View style={styles.container}>
        
        <Text style={styles.text}>First Name</Text>
     
        <TextInput style={styles.nameInput} autoCorrect={false} value={name}
          onChangeText={(userInput) => 
            setName(userInput)
        }
        />
     
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.nameInput} autoCapitalize={"none"} autoCorrect={false} value={email}
          onChangeText={(userInput) => 
            setEmail(userInput)
        }
        />
        <TouchableOpacity onPress={() => {
            user_data.set('name', name),
            user_data.set('email', email),
            name.trim() !== "" && email.trim() !== "" ? props.navigation.navigate('Welcome', {user_data}) : null}
        }>
                <Feather style={styles.icon} name="arrow-right-circle"/>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>*We will not share your personal information with anyone</Text>


       </View>
   )
};
 
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
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
    color: '#A32934'

  },
  icon: {
    fontSize:50,
    position: 'absolute',
    bottom: -375,
    left: 300
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
  }
  
 
});
 
export default KnowledgeScreen; //change screen name
