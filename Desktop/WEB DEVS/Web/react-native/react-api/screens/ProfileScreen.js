import {View,Text,TextInput,StyleSheet,Alert,TouchableOpacity,Image} from 'react-native';
import { useEffect, useState } from 'react';
import useUserId from '../components/useUserId';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import myapi from '../api/myapi';
import { useNavigation } from '@react-navigation/native';
import { DevSettings } from 'react-native';

const ProfileScreen = ({route}) =>{

    const navigation = useNavigation();

    const [userId,setUsrId] =  useUserId();

    const [username,setUsername] = useState('');
 
    //const [userId,setUserId] = useState('');
    const [feedback,setFeedback] = useState('');
    const [error,setError] = useState('');

    // const[usrmail,usrname] = useUserData();

    const {usrname} = route.params;

    //get userid
    const getUserId = async () => {
        try {
          const usr = await AsyncStorage.getItem('usr_id');
          if (usr !== null || usr !== undefined) {
            // We have data!!
            // setUserId(usr);
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
    

    

    const updateUser = (userId,username) =>{

    
        myapi.post('update/user/',{
            usr_id:userId,
            username: username
        })
        .then((response) =>{
           console.log(response);
            setFeedback(response.data.message);
        })
        .catch(function (error) {
            // handle error
        console.log(error);
        setError('Something went wrong');
    
        })


    }

    const validateForm = () =>{
     

        if(username == ''){
         Alert.alert('Entry required', 'Username required');
         //alert("All fields required");

        }else{
            updateUser(userId,username);
            setUsername('');
      
         
        }
    }

    const logOut = async () =>{
        try {
            await AsyncStorage.removeItem('usr_id');
  
          } catch (e) {
            // saving error
          }
         
          DevSettings.reload();

    }

return(
    <View style={styles.container}>

     {feedback ? <Text style={styles.feeds}>{feedback}</Text> :null}
     {/* <Text>{userId}</Text> */}
     
     <View style={styles.img_container}>
        <Image style={styles.img} source={require('../assets/myapilogo.png')} />
        <Text style={{fontWeight: '800',fontSize:25}}>My api app</Text>
     </View>

 
     
    <View style={styles.containerInput}>
    <Text style={styles.label}>Username <Entypo name="dot-single"  color="black" />
     <Text style={{color: 'green'}}>{usrname}</Text>
     </Text>
    <TextInput style={styles.textInput} placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
    </View>


   <View style={styles.btn_container}>
     <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={validateForm}>Update</Text>
    </TouchableOpacity>
   </View>
   
   <TouchableOpacity style={styles.btn2}>
               <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={logOut}> LogOut </Text>
     </TouchableOpacity>


    </View>
);
}

const styles = StyleSheet.create({
    container:{
     flex:1,
    },
    feeds:{
        padding:10,
        backgroundColor: '#ced4da',
        borderRadius:5,
       fontSize:20,
       margin:10

    },
    img_container:{
     margin:10,
     alignItems:'center',
     justifyContent: 'center'
    },
    img:{
        width:150,
        height:150
    },
    textInput:{
        backgroundColor: '#ded7d7',
        height:50,
        paddingLeft:10,
        
        
    },
    containerInput:{
        margin:10

    },
    label:{
        fontSize:18,
      
    },
    curr:{
        fontSize:14,
        color: 'red'

    },
    btn:{
     margin:5,
     padding:15,
     backgroundColor:'green',
    },
 
    btn2:{
        margin:5,
        padding:15,
        backgroundColor:'black',
    },
    feedError:{
        padding:10,
        backgroundColor: '#ded7d7',
        borderLeftColor: 'red',
        borderLeftWidth: 5,
        marginBottom:20
    }
 })

export default ProfileScreen;