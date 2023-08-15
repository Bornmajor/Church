import { View,Text,FlatList,Image, StyleSheet,TouchableWithoutFeedback } from "react-native";
import axios  from "axios";
import { useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const UserData = ({ route }) =>{
    const navigation = useNavigation();
    const {id} = route.params;
    // console.log(id);

   const[userdata,setUserData]  = useState(null);
   const [error,setErrorMsg] = useState('');

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

 const deleteUser = () => {
    const {id} = route.params;
    console.log(id);
    // console.log(id);
    axios.get('https://symmetric-classific.000webhostapp.com/php_api/customers/delete.php?id='+id, {
   
      })
        .then((response) => {
          console.log(response.data);
          
          alert("User deleted !!");
          
        })
        .catch((error) => {
        //   console.error(error.response);
          
        });
    
}


if(!userdata){
    return null;
}

return(<View>

    <View style={styles.container}>
           <Image style={styles.image} source={require('../assets/man_2922510.png')} />
           <Text style={styles.text}>Name: {userdata.name}</Text>
           <Text style={styles.text}>Email: {userdata.email}</Text>
           <Text style={styles.text}>Phone number: {userdata.phone}</Text>
    </View>

    {error ? <Text style={styles.error}>{error}</Text>: null}
   
   <View style={styles.container_icon}>
     <TouchableWithoutFeedback onPress={() => navigation.navigate('Edit', {id: userdata.id})} userdata={userdata}>
          <FontAwesome5 style={styles.icon} name="user-edit" size={45} color="black" />
     </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback  onPress={deleteUser} userdata={userdata}>
       <MaterialIcons style={styles.icon} name="delete" size={45} color="black" /> 
    </TouchableWithoutFeedback>
    
   </View>
  
    

</View>
)
  


}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ded7d7',
        padding:10,
        margin:10
    },
    image:{
        width:200,
        height:200
    },
    text:{
        fontSize:18,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center'     
    },
    container_icon:{
        margin:10,
        flexDirection:'row',
        justifyContent: 'center'
    },
    icon:{
        backgroundColor: '#ded7d7',
        padding:10,
        marginHorizontal:5
    },
    error:{
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UserData;