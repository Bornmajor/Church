import { TextInput ,Text,View, StyleSheet, TouchableWithoutFeedback,Touchable, TouchableOpacity, Alert} from "react-native";
import axios  from "axios";
import { useState,useEffect } from "react";

const EditProfile = ({route}) =>{
    const {id} = route.params;
    // console.log(id);

    const[userdata,setUserData]  = useState(null);
   const [error,setErrorMsg] = useState('');

     const [name,setName] = useState('');
     const [email,setEmail] =  useState('');
     const [phone,setPhone] = useState('');

     //get data by id
    getUserDataById = (id) =>{
        axios.get('https://symmetric-classific.000webhostapp.com/php_api/customers/read.php?id='+id)
        .then(function (response) {
            // handle success
            // console.log(id);
            // console.log(response.data.data);
            setUserData(response.data.data);
        
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            setErrorMsg('Something went wrong');
            
            
          })
          .finally(function () {
            // always executed
              // console.log(response.data);
          });
    
       }
 
       useEffect (()=>{
        getUserDataById(id);
    },[]);

   //update profile
   const updateProfile = (id,name,email,phone) =>{
    axios.post('https://symmetric-classific.000webhostapp.com/php_api/customers/update.php?id='+id, {
      name: name,
      email: email,
      phone: phone
    })
      .then((response) => {
        console.log(response.data);
        
        alert("Profile updated successfully!!");
        
      })
      .catch((error) => {
        console.error(error);
      });
    //  alert('Profile updated');
   }
 

    
    if(!userdata){
        return null;
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
             updateProfile(id,nameValue,emailVal,phoneVal);
          }
        

        }
       


    }


    return(<View>
        
             {error ? <Text style={styles.error}>{error}</Text>: null}
  
        <View style={styles.containerInput}>
            <Text style={styles.label}>Name : <Text style={styles.curr}>{userdata.name}</Text></Text>
          <TextInput style={styles.textInput} 
          placeholder="Name"
          value={name}   
          onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.label}>Email: <Text style={styles.curr}>{userdata.email}</Text></Text>
            <TextInput style={styles.textInput}
             placeholder="Email"  
             value={email}   
             onChangeText={(text) => setEmail(text)} 
             />
        </View>

        <View style={styles.containerInput}>
            <Text style={styles.label}>Phone number: <Text style={styles.curr}>{userdata.phone}</Text></Text>
            <TextInput style={styles.textInput}
             placeholder="Phone number"
             value={phone}
             onChangeText={(text) => setPhone(text)} 
             />
        </View>
       
       <TouchableOpacity  style={styles.update_btn} onPress={validateForm}>
        <Text style={{color: 'white'}}>Update Profile</Text>
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
     margin:5,
     padding:15,
     backgroundColor:'red'
    }
})
export default EditProfile;