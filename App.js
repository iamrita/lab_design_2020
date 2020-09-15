import HomeScreen from "./src/screens/HomeScreen";
import IntroQuestionScreen from "./src/screens/IntroQuestionScreen"
import FamilialIncome1Screen from './src/screens/FamilialIncome1';
import FamilialIncome2Screen from './src/screens/FamilialIncome2';
import SizeOfFamilyScreen from './src/screens/SizeOfFamily';
import CollegeWorkScreen from './src/screens/CollegeWork';
import EnrollmentTypeScreen from './src/screens/EnrollmentType';
import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import FedResultsScreen from "./src/screens/FedResults";
import WelcomeScreen from './src/screens/WelcomeScreen'
import ApplyScreen from './src/screens/ApplyScreen';
import TotalAidScreen from './src/screens/TotalAidScreen';
import ShareScreen from './src/screens/ShareScreen';
import ResultsScreen from "./src/screens/Results";
import StateResultsScreen from "./src/screens/StateResults";
import OtherResultsScreen from "./src/screens/OtherResults";
import EITCScreen from "./src/screens/EITC";

     
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
    Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
    IntroQuestion: {screen: IntroQuestionScreen, navigationOptions: {headerShown: false} },
    Welcome: {screen: WelcomeScreen, navigationOptions: {headerShown: false} },
    TotalAid: {screen: TotalAidScreen, navigationOptions: {headerShown: false} },
    FamIncome1: {screen: FamilialIncome1Screen, navigationOptions: {headerShown: false} },
    FamIncome2: {screen: FamilialIncome2Screen, navigationOptions: {headerShown: false} },
    SizeOfFamily: {screen: SizeOfFamilyScreen, navigationOptions: {headerShown: false} },
    EnrollmentType: {screen: EnrollmentTypeScreen, navigationOptions: {headerShown: false} },
    CollegeWork: {screen: CollegeWorkScreen, navigationOptions: {headerShown: false} },
    Results: {screen: ResultsScreen, navigationOptions: {headerShown: false} },
    FedResults: {screen: FedResultsScreen, navigationOptions: {headerShown: false} },
    StateResults: {screen: StateResultsScreen, navigationOptions: {headerShown: false} },
    OtherResults: {screen: OtherResultsScreen, navigationOptions: {headerShown: false} },
    EITC: {screen: EITCScreen, navigationOptions: {headerShown: false} },
    Share: {screen: ShareScreen, navigationOptions: {headerShown: false} },
    Apply: {screen: ApplyScreen, navigationOptions: {headerShown: false} },

  },
  
  {
    //initialRouteName: "LandingPage2",
    initialRouteParams: "HomeScreen",
    headerMode: "float"
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator);
