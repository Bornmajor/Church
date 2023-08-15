import { TextInput ,View,StyleSheet,TouchableOpacity,Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";


const Login = () =>{
    [usr,setUsr]  = useState('');
    [pwd,setPwd]  = useState('');
    [feedbackMsg,setFeedbackMsg] = useState('Proceed');

const submitData = () =>{
if(!usr.trim() && !pwd.trim()){
alert('Please fill fields');
}else{
 getData   
}
}



const getData = async () => {
try {
    const myusername = await AsyncStorage.getItem('username');
    const mypwd = await AsyncStorage.getItem('password');

    // console.log(myusername,mypwd);
    if(myusername !== usr ){
        setFeedbackMsg('Username incorrect');
    }else if(mypwd !== pwd){
        setFeedbackMsg('Password incorrect');
    }else{
        setFeedbackMsg('Verification successfull!!');
    }

} catch(e) {
    // error reading value
}

}


return(
    <View style={{ marginVertical:30}}>

        

  <View style={styles.container}>

   <Text style={styles.feedback}>{feedbackMsg}</Text>
        <TextInput 
        style={styles.textPwd}
        placeholder="Username"
        onChangeText={(val) => setUsr(val)}
        value={usr}
      
        />
         <TextInput 
        style={styles.textPwd}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(val)=> setPwd(val)}
        value={pwd}
        
        />

        <TouchableOpacity 
         style={styles.btn}
         onPress={getData}
         >
            <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>  
       
    </View>

    </View>
  

)

      

}

const styles = StyleSheet.create({
    container:{
     margin:20,
    },
    textPwd:{
        backgroundColor: '#A9A9A9',
        padding: 10,
        margin:10
    },
    btn:{
      margin:10,
      backgroundColor:'brown',
      padding:10,
    
    },
    feedback:{
        margin:10,
        padding:10,
        backgroundColor: 'green',
        color:'white'

    }
    })
    
export default Login;