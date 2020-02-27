import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {
  HomeScreen, AccountScreen, SignInScreen, SignUpScreen,
  TrackCreateScreen, TrackDetailScreen, TrackListScreen
} from './src/screens'

const switchNavigator = createSwitchNavigator({
  Home: HomeScreen,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
})

export default createAppContainer(switchNavigator)
