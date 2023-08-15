import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default () =>{

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
   
  return[userId, getUserId];
}


