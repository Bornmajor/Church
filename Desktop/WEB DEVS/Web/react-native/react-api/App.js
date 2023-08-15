import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { useEffect, useState } from 'react';
import useUserId from './components/useUserId';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserScreen from './screens/UserScreen';
import ProductItem from './screens/ProductItem';
import ProfileScreen from './screens/ProfileScreen';
import { createNativeWrapper } from 'react-native-gesture-handler';
import CategoryScreen from './screens/CategoryScreen';
import CartScreen from './screens/CartScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  const [userId,setUsrId] = useState(null);

  const getUserId = async () => {
    try {
      const usr = await AsyncStorage.getItem('usr_id');
      if (usr !== null || usr !== undefined) {
        // We have data!!
        setUsrId(usr);
        console.log(usr);
        
         
      }else{
        console.log('User id is not set');
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }


  };

  useEffect(()=>{
    getUserId();
  },[])
   
 
    
  return (
    
    <NavigationContainer>

    <Stack.Navigator >

    {userId == null ? (
      <>

      <Stack.Screen
       name="Login" 
      component={LoginScreen} 
      options={{
        title: 'Login',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' }
      }}
      
      />

      <Stack.Screen
      name="Register" 
      component={RegisterScreen} 
      options={{
        title: 'Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' }
      }}
      
      />
   
  

      </>
      
      ) : (
        <>

        <Stack.Screen
        name="Home" 
        component={HomeScreen} 
        options={{
        }}
        />

<Stack.Screen
       name="Profile" 
      component={ProfileScreen} 
      options={{
        title: 'Profile',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' }
      }}
      
      />


      <Stack.Screen
       name="User" 
      component={UserScreen} 
      options={{
        title: 'User',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' }
      }}
      
      />

      <Stack.Screen
       name="Product" 
      component={ProductItem} 
      options={{
        title: 'Product',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' }
      }}
      
      />
         <Stack.Screen
       name="Category" 
      component={CategoryScreen} 
      options={({route})=>({ title: route.params.cat_title})}
      
   
      />

      <Stack.Screen
          name="Cart" 
          component={CartScreen} 
          options={{
            title: 'My cart',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'green' }
          }}
        
            />

        <Stack.Screen
          name="Wish" 
          component={WishlistScreen} 
          options={{
            title: 'My wishlist',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'green' }
          }}
        
            />



         </>

      )}



    </Stack.Navigator>

   

</NavigationContainer>

  

  
  );
}


