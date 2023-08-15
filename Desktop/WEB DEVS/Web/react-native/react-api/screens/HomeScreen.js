import { View,Text, StyleSheet,Button, TouchableOpacity,FlatList } from "react-native";
import { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductItem from "../components/ProductItems";
import CatItem from "../components/CatItems";
import { useNavigation } from "@react-navigation/native";

import useUserData from "../components/useUserData";
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";



const HomeScreen = () =>{

  const [userId,setUsrId] = useState(null);

  const getUsrId = async () => {
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
    getUsrId();
  },[])

  const navigation = useNavigation();
  const [feedback,setFeedback] = useState('');
  const [users,usrmail,usrname,getUserId] = useUserData();




  useEffect(()=>{
 
    navigation.setOptions({
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'green' },    
      headerRight: () => (
        <View style={styles.btncontainer}>

        <TouchableOpacity  style={styles.profileIcon}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={{fontSize:20}}>
        <Foundation name="shopping-cart" size={24} color="green" />
        </Text>
        </TouchableOpacity> 

         <TouchableOpacity  style={styles.profileIcon}
        onPress={() => navigation.navigate('Wish')}>
        <Text style={{fontSize:20}}>
        <Foundation name="heart" size={24} color="green" />
        </Text>
        </TouchableOpacity> 

        <TouchableOpacity  style={[styles.profileIcon,{ marginLeft: 15}]}
        onPress={() => navigation.navigate('Profile',{usrname:usrname,usrmail:usrmail})}>
        <Text style={{fontSize:20}}>
        <FontAwesome5 name="user-alt" size={24} color="green" />
        </Text>
        </TouchableOpacity>
        </View>
        
        
      )
       })
       
  },[])

  
return(<ScrollView>
  
 <CatItem />
 <ProductItem />
 {/* <Button title="pRESS" onPress={getUserId}/> */}


</ScrollView>
)
}

const styles = StyleSheet.create({
  container:{
   marginBottom:20
  },
  btncontainer:{
    flexDirection: 'row'

  },
 item:{
   backgroundColor: '#ded7d7',
   borderRadius: 10,
   width:250,
   margin:10

   
 },
 prodTitle:{
  padding:5,

 }
 ,  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
 profileIcon:{
  backgroundColor: '#ded7d7',
  borderRadius: 40/2,
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 5
  
 }
})

export default HomeScreen;