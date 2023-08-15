import axios  from "axios";
import { useEffect,useState } from "react";

export default () =>{
     const [user,setUser]  = useState([]);

      getUserData = () =>{  
        axios.get('https://symmetric-classific.000webhostapp.com/php_api/customers/read.php')
        .then(function (response) {
          // handle success
          // console.log(response.data.data);
          setUser(response.data.data);
      
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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