import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../components/home/index';
import AboutScreen from '../components/about/index';

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode: Platform.OS === 'android' ? 'screen' : 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default MainStackNavigator;
