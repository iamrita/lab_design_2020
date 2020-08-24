import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import IntroQuestionScreen from "./src/screens/IntroQuestionScreen"
import KnowledgeScreen from './src/screens/KnowledgeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'
import ApplyScreen from './src/screens/ApplyScreen';
import TotalAidScreen from './src/screens/TotalAidScreen';
import ShareScreen from './src/screens/ShareScreen';
import FamilialIncome1 from './src/screens/FamilialIncome1';
import FamilialIncome2 from './src/screens/FamilialIncome2';
import EnrollmentType from './src/screens/EnrollmentType';
import CollegeWork from './src/screens/CollegeWork';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    IntroQuestion: IntroQuestionScreen,
    Knowledge: KnowledgeScreen,
    Welcome: WelcomeScreen,
    Apply: ApplyScreen,
    TotalAid: TotalAidScreen,
    Share: ShareScreen,
    FamilialIncome1: FamilialIncome1,
    FamIncome2: FamilialIncome2,
    EnrollmentType: EnrollmentType,
    CollegeWork: CollegeWork,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: ""
    }
  }
);

export default createAppContainer(navigator);
