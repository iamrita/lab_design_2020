import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'

const KnowledgeScreen = (props) => { // change screen name
  const [firstName, setName] = useState('')
   return (
       <View style={styles.container}>
        
        <Text style={styles.text}>First Name</Text>
        <TextInput style={styles.nameInput} autoCorrect={false} value={firstName}
          onChangeText={(userInput) => setName(userInput)}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.nameInput}/>
        <TouchableOpacity onPress={() => props.navigation.navigate('Welcome', {name: firstName})}><Feather style={styles.icon} name="arrow-right-circle"/></TouchableOpacity>
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
    bottom: -395,
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