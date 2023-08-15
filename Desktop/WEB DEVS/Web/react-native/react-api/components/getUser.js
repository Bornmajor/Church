import { useState,useEffect } from "react";
import axios from "axios";


export default  () =>{

    
    const [user,setUser] = useState('');

     //async data is stored
         //get user data
         const getUserData = (usr_id) =>{  
            axios.get(`https://symmetric-classific.000webhostapp.com/react-api/users/?usr_id=${usr_id}`)
            .then(function (response) {
                console.log(usr_id);
              // handle success
              console.log(response.data);
              setUser(response.data.res['username']);
            
          
            })
            .catch(function (error) {
              // handle error
              console.log(error);
              setError('Something when wrong');
            })
            .finally(function () {
              // always executed
                // console.log(response.data);
            });
    
         }

     


         useEffect (()=>{
            getUserData();
        },[]);

        return[user];
    

}