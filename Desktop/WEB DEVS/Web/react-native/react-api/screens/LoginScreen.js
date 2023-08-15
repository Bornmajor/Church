import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import myapi from '../api/myapi';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserId from '../components/useUserId';
import NetworkError from '../components/NetworkError';
import { DevSettings } from 'react-native';



const LoginScreen = () =>{
    const navigation = useNavigation();
    const[userId,getUserId] = useUserId();


  

    const [email,setEmail] = useState('');
    const [password,setPassword ] = useState('');
    const [feedback,setFeedback] = useState('');
    const [errors,setError] = useState('');
    //const [sess_id,setSessId] = useState('');

    const validateForm = () =>{

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if(email == '' || password == ''){
         alert("All fields required");
        }else if(!emailRegex.test(email)){
           //invalid 
           alert("Please enter valid email");
   
        }else{
            loginUser(email,password);
            
            // getUserId();
            setEmail('');
            setPassword('');
            setFeedback('');      

            setTimeout(() => {
              setError('');   
            }, 3000);
              
         
         
        }

       
    

    }
    const loginUser = (email,password) =>{
        myapi.post('users/login/',{
            email: email,
            password: password
         })
        .then(function (response) {
            // handle success
        
            setFeedback(response.data.message);

            console.log(response.data.res);
            if(response.data.res['usr_id'] !== null || response.data.res['usr_id'] !== undefined){
            //success login
            //async store usr_id 
            setUserId(response.data.res['usr_id']);

            DevSettings.reload();
            // navigation.navigate('Home');
         
            }
            
    
        
        })
        .catch(function (error) {
            // handle error
            // setError('Something went wrong');
            setError('Network error');
        })
        .finally(function () {
            // always executed
        });
    
    }


  
    const setUserId = async (value) => {

        try {
          await AsyncStorage.setItem('usr_id', value);

        } catch (e) {
          // saving error
        }

      };

      //change screen    
     
    return (<ScrollView>
     
        <View style={styles.containerInput}>
       
        {errors ?    <NetworkError /> : null}

        {feedback ?  <View style={styles.feeds}><Text style={{fontSize: 20}}>{feedback}</Text></View> : null}
     
    
       </View>
       <View style={styles.containerInput}>

       <View style={styles.img_container}>
        <Image style={styles.img} source={require('../assets/myapilogo.png')} />
        <Text style={{fontWeight: '800',fontSize:25}}>My api app</Text>
     </View>

 
      

       <Text style={styles.label}>Email</Text>
           <TextInput style={styles.textInput} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
           </View>
       <View style={styles.containerInput}>
       <Text style={styles.label}>Password</Text>
           <TextInput style={styles.textInput} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>
       </View>
               
           <TouchableOpacity style={styles.btn}>
               <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={validateForm}> Login </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btn2}>
               <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={() => {navigation.navigate('Register')}}> Create account </Text>
           </TouchableOpacity>

     

     
   
      
      
       </ScrollView>)
}

const styles = StyleSheet.create({
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
        height:40,
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
    feeds:{
        padding:10,
        backgroundColor: '#ced4da',
        borderRadius:5

    },

 })

export default LoginScreen