
import { useState,useContext, useEffect } from "react";
import myapi from "../api/myapi";
import useUserId from "./useUserId";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";



export default () =>{

const [users,setUsers] = useState(null);

const [usrmail,setUsrMail] = useState(null);
const [usrname,setUsrName] = useState(null);


const getUser = async (id) =>{
   
    try{     
      const response = await myapi.get('users/?usr_id='+id);
    //console.log(userId);
    //console.log(response);
    //get whole array of user data
    setUsers(response.data.res);

    setUsrMail(response.data.res.email);
    setUsrName(response.data.res.username);
    }catch(error){
        console.log(error);
        return(<ActivityIndicator size="large"/>);
    }
    

}

const getUserId = async () => {
    try {
      const usr = await AsyncStorage.getItem('usr_id');
      if (usr !== null || usr !== undefined) {
        // We have data!!
        getUser(usr);
       // setUsrId();
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

return[users,usrmail,usrname,getUserId];   

}

