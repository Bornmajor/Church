import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import UsersScreen from './screens/UsersScreen';
import UserData from './components/UserData';
import EditProfile from './screens/EditProfile';
import AddUserScreen from './screens/AddUserScreen';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
       name="Home" 
      component={HomeScreen} 
      options={{
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />
      <Stack.Screen 
      name="Product" 
      component={ProductScreen} 
      options={{
        title: 'Products',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />
         <Stack.Screen 
      name="Users" 
      component={UsersScreen} 
      options={{
        title: 'Users',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />
         <Stack.Screen 
      name="Profile" 
      component={UserData} 
      options={{
        title: 'User Profile',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />
      <Stack.Screen 
      name="Edit" 
      component={EditProfile} 
      options={{
        title: 'Edit Profile',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />

         <Stack.Screen 
      name="AddUser" 
      component={AddUserScreen} 
      options={{
        title: 'Add user',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'red' }
      }}
      
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
