import{View,StyleSheet,Text,Alert,TextInput,TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddUserScreen = () =>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] =  useState('');

    const [error,setErrorMsg] = useState('');

     const  addUser = (name,email,phone) =>{
        console.log(name,email,phone);
        axios.post('https://symmetric-classific.000webhostapp.com/php_api/customers/create.php', {
            name: name,
            email: email,
            phone: phone
          })
            .then((response) => {
              console.log(response.data);
              
              alert("User added successfully!!");
              
            })
            .catch((error) => {
            //   console.error(error.response);
              
            });

       }

       //validate form
       validateForm = () =>{
        let  nameValue = name ;
        let emailVal = email;
        let phoneVal = phone ;
       
        if(nameValue == '' || emailVal == '' || phoneVal == ''){
            alert('All fields are required');
           

           
        }else {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
         
          //check valid email
          if(!emailRegex.test(emailVal)){
            alert('Please enter a valid email');
          }else{
            // const {id} = route.params;

             addUser(nameValue,emailVal,phoneVal);
             setName('');
             setEmail('');
             setPhone('');

          }
        

        }
       
    }

 return(
    <View>
           {error ? <Text style={styles.error}>{error}</Text>: null}

        <View style={styles.containerInput}>
            <Text style={styles.label}>Name</Text>
          <TextInput style={styles.textInput} 
          placeholder="Name"
          value={name}   
          onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput}
             placeholder="Email"  
             value={email}   
             onChangeText={(text) => setEmail(text)} 
             />
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.textInput}
             placeholder="Phone number"
             value={phone}
             onChangeText={(text) => setPhone(text)} 
             />
        </View>
       
       <TouchableOpacity  style={styles.update_btn} onPress={validateForm}>
        <Text style={{color: 'white', fontSize:18, fontWeight:600}}>ADD USER</Text>
       </TouchableOpacity>
      
    </View>
 )
}
const styles = StyleSheet.create({
    textInput:{
        backgroundColor: '#ded7d7',
        height:40
        
    },
    containerInput:{
        margin:10

    },
    label:{
        fontSize:18
    },
    curr:{
        fontSize:14,
        color: 'red'

    },
    update_btn:{
     borderRadius:5,
     margin:10,
     padding:15,
     backgroundColor:'red'
    }
})

export default AddUserScreen;