import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './Screens/SplashScreen';
import EventsList from './Screens/EventsList';

const App = createStackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Events: {
    screen: EventsList,
  }
});

export default createAppContainer(App);