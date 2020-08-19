import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import IntroQuestionScreen from "./src/screens/IntroQuestionScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    IntroQuestion: IntroQuestionScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
