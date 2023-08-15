import axios from 'axios';
import { useState ,useEffect} from 'react';

export default () =>{

    getCustomer = () =>{
      const [customer,setCustomer] = useState([]);

      axios.get('https://symmetric-classific.000webhostapp.com/php_api/customers/read.php')
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setCustomer(response.data);
    
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

    useEffect(()=>{ 
      getCustomer();
    },[])

    return[customer];
}
