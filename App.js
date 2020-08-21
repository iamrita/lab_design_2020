import HomeScreen from "./src/screens/HomeScreen";
import IntroQuestionScreen from "./src/screens/IntroQuestionScreen"
import FamilialIncome1Screen from './src/screens/FamilialIncome1';
import FamilialIncome2Screen from './src/screens/FamilialIncome2';
//import SizeOfFamilyScreen from './src/screens/SizeOfFamily';
import CollegeWorkScreen from './src/screens/CollegeWork';
import EnrollmentTypeScreen from './src/screens/EnrollmentType';
import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return <AppContainer/>
  }
}

export default App

const AppSwitchNavigator = createStackNavigator(
  {    
    //Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
    FamIncome1: {screen: FamilialIncome1Screen, navigationOptions: {headerShown: false} },
    FamIncome2: {screen: FamilialIncome2Screen, navigationOptions: {headerShown: false} },
    //SizeOfFamily: {screen: SizeOfFamilyScreen, navigationOptions: {headerShown: false} },
    EnrollmentType: {screen: EnrollmentTypeScreen, navigationOptions: {headerShown: false} },
    CollegeWork: {screen: CollegeWorkScreen, navigationOptions: {headerShown: false} },
    IntroQuestion: {screen: IntroQuestionScreen, navigationOptions: {headerShown: false} }
  },
  
  {
    //initialRouteName: "LandingPage2",
    initialRouteParams: "FamIncome1",
    headerMode: "float"
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator);
