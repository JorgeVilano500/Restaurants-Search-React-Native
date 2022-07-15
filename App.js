
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen // list of screens we have in the application
},{
  
  initialRouteName: 'Home', // initial home screen
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
}

)

export default createAppContainer(navigator);


