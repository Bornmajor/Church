
import react from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
{
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
},
{
  intialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }  
}
)

const App = createAppContainer(navigator);

export default () =>{
  return <Provider>
    <App />
    </Provider>
};