import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import IntroQuestionScreen from "./src/screens/IntroQuestionScreen"
import KnowledgeScreen from './src/screens/KnowledgeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    IntroQuestion: IntroQuestionScreen,
    Knowledge: KnowledgeScreen,
    Welcome: WelcomeScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
