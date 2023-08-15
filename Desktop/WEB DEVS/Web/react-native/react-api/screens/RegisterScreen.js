import { View,TextInput,StyleSheet,TouchableOpacity,Text,Alert, ScrollView,Image} from "react-native";
import { useState,useEffect } from "react";

import myapi from "../api/myapi";
import { useNavigation } from "@react-navigation/native";


 const RegisterScreen = () =>{
    const navigation = useNavigation();

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword ] = useState('');
    const [feedback,setFeedback] = useState('');
    const [errors,setError] = useState('');


    const validateForm = () =>{
     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

     if(email == '' || username == '' || password == ''){
      alert("All fields required");
     }else if(!emailRegex.test(email)){
        //invalid 
        alert("Please enter valid email");

     }else{
         AddUser(username,email,password);
         setEmail('');
         setUsername('');
         setPassword('');

         setTimeout(() => {
            setFeedback('');
         }, 10000);
      
      
     }

    }

    const AddUser = (usrname,mail,pwd) =>{
     
        myapi.post('users/registration/',{
            username : usrname,
            email: mail,
            password: pwd
         })
        .then(function (response) {
            // handle success
            console.log(response);
            setFeedback(response.data.message);
        })
        .catch(function (error) {
            // handle error
            setError('Something went wrong');

            setTimeout(() => {
                setError('');
            }, 8000);
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    
     
    }

    return (<ScrollView>
     
     <View style={styles.containerInput}>

    
     
     {errors ?  <View style={styles.feedError}><Text >{errors}</Text></View> : null}
     {feedback ?  <View style={styles.feeds}><Text >{feedback}</Text></View> : null}
     
     <View style={styles.img_container}>
        <Image style={styles.img} source={require('../assets/myapilogo.png')} />
        <Text style={{fontWeight: '800',fontSize:25}}>My api app</Text>
     </View>
     
     <Text style={styles.label}>Username</Text>
        <TextInput style={styles.textInput} placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
    </View>

    <View style={styles.containerInput}>
    <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textInput} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
        </View>

    <View style={styles.containerInput}>
    <Text style={styles.label}>Password</Text>
        <TextInput style={styles.textInput} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true}/>
    </View>
            
        <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={validateForm}>Submit </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 18}} onPress={() => {navigation.navigate('Login')}}>Log Account</Text>
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
        backgroundColor: '#ded7d7',
        borderLeftColor: 'green',
        borderLeftWidth: 5,
        marginBottom:20

    },
    feedError:{
        padding:10,
        backgroundColor: '#ded7d7',
        borderLeftColor: 'red',
        borderLeftWidth: 5,
        marginBottom:20
    }
 })

 export default RegisterScreen;
 