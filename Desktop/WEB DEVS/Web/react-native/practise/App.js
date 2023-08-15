import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StateExample from './src/screens/StateExample';
import InputText from './src/screens/InputText';
import ImageScreen from './src/screens/ImageScreen';
import AsyncScreen from './src/screens/AsnycScreen';
import Login from './src/screens/components/Login';
import SqliteScreen from './src/screens/SqliteScreen';
import List from './src/screens/List';
import ApiScreen from './src/screens/ApiScreen';
import YouTube from 'react-native-youtube';
import YoutubeScreen from './src/screens/YoutubeScreen';
import ApiTestScreen from './src/screens/ApiTestScreen';
import DrawerNav from './src/screens/DrawerNav';
import ActivityIndicate from './src/screens/ActivityIndicate';
import CameraScreen from './src/screens/CameraScreen';
import FormElement from './src/screens/FormElements';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator  initialRouteName="Home">
      
      <Stack.Screen 
      name="Home"
       component={HomeScreen} 
       options={{
        title: 'Practise app',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' }
      }}
      
      />
      <Stack.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        title: 'Profile',
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
       />
      <Stack.Screen 
      name="State" 
      component={StateExample}
      options={{
        title: 'State Example',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' }
      }}
       />
         <Stack.Screen 
      name="Text" 
      component={InputText}
      options={{
        title: 'Text',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'orange' }
      }}
       />
            <Stack.Screen 
      name="Image" 
      component={ImageScreen}
      options={{
        title: 'Image',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'orange' }
      }}
       />

<Stack.Screen 
      name="SignUp" 
      component={AsyncScreen}
      options={{
        title: 'Example sign up',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'orange' }
      }}
       />

<Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        title: 'Example login',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'brown' }
      }}
       />

<Stack.Screen 
      name="Sqlite" 
      component={SqliteScreen}
      options={{
        title: 'Example sqlite',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'brown' }
      }}
       />

<Stack.Screen 
      name="List" 
      component={List}
      options={{
        title: 'Example list',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'brown' }
}}
  />

<Stack.Screen 
      name="Api" 
      component={ApiScreen}
      options={{
        title: 'Example api ',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'brown' }
}}
  />

<Stack.Screen 
      name="yts" 
      component={YoutubeScreen}
      options={{
        title: 'Example video player ',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
}}
  />

<Stack.Screen 
name="testapi" 
component={ApiTestScreen}
options={{
  title: 'Api test ',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'red' }
}}
/>

<Stack.Screen 
name="drawer" 
component={DrawerNav}
options={{
  title: 'Drawer ',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'red' }
}}
/>

<Stack.Screen 
name="activity" 
component={ActivityIndicate}
options={{
  title: 'ActivityIndicator',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'red' }
}}
/>

<Stack.Screen 
name="cam" 
component={CameraScreen}
options={{
  title: 'Camera',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'red' }
}}
/>


<Stack.Screen 
name="form" 
component={FormElement}
options={{
  title: 'Form element',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'red' }
}}
/>


    </Stack.Navigator>
    
    
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
