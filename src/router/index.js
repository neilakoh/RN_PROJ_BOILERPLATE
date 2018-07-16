import { createStackNavigator } from 'react-navigation';

import ModalScreen from '../components/modal/index';
import MainStackNavigator from './MainStackNavigator';

const rootStackNavigator = createStackNavigator({
  Main: {
    screen: MainStackNavigator
  },
  Modal1: {
    screen: ModalScreen
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default rootStackNavigator;
