import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './Screens/SplashScreen';
import EventsList from './Screens/EventsList';
import RegistrationScreen from './Screens/RegistrationScreen';

const App = createStackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Events: {
    screen: EventsList,
  },
  Registration: {
    screen: RegistrationScreen
  }
});

export default createAppContainer(App);