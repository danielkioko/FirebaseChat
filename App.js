import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);