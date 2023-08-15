import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import UpdateStatus from './src/screens/UpdateStatus';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Getting started with react native</Text>
//       <StatusBar style="auto" />
//       <ComponentsScreen />
//     </View>
//   );
// }


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen ,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square:SquareScreen,
    Update: UpdateStatus,
    Text: TextScreen,
    Box: BoxScreen


  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);











// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
  
//   },
//   title:{
//     fontSize:45
//   }
// });
