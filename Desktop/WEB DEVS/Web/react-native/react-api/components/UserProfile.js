import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const UserProfile = ({username,onLogout}) =>{
    
    

     return(
    <View style={styles.usernameContainer}>
    <View style={styles.user}>
    <FontAwesome name="user" size={24} color="black" />
    <Text style={styles.welcomeTxt}>{username}</Text>  
    </View>
 

    <View style={styles.logout}>
     
     <TouchableOpacity 
     style={{flexDirection: 'row', alignItems: 'center',backgroundColor: 'green', borderRadius: 10, paddingHorizontal:5}}
     onPress={onLogout}
     >
     <MaterialIcons name="logout" size={24} color="white" />
    <Text style={styles.logoutTxt}>Logout</Text>
     </TouchableOpacity>
   
    </View>

    </View>
    )
}

const styles = StyleSheet.create({
    usernameContainer:{
     backgroundColor : '#ded7d7',
     padding:10,
     margin:10,
     borderRadius:10,
     flexDirection: 'row',
     alignItems: 'center'
    },
    user:{
       flexDirection: 'row',
       alignItems: 'center',
       marginHorizontal:10
   
    },
    logout:{
     flexDirection: 'row',
     alignItems: 'center',
     flex:1,
     justifyContent: 'flex-end'
    },
    welcomeTxt:{
      fontSize:18,
      fontWeight:600,
      margin:10
    },
    logoutTxt:{
       color: 'white',
      fontSize:18,
      fontWeight:600,
      margin:10
    },
    errorContainer:{
       alignItems: 'center',
       zIndex:2,
       
    },
    errotTxt:{
     fontSize:20
    },
    errorBtn:{
       margin:10,
       backgroundColor: 'green'
    }
   })
   

export default UserProfile;