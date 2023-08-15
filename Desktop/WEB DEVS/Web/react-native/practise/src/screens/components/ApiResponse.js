import axios from 'axios';
import { useState ,useEffect} from 'react';


export default  () =>{

    const [result,setResult] = useState([]);
    const [errorMsg,setErrorMsg] = useState();


    callResponse =() =>{

    axios.get('https://symmetric-classific.000webhostapp.com/php_api/customers/read.php')
  .then(function (response) {
    // handle success
    // console.log(response.data.data);
    setResult(response.data.data);

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
        callResponse();
    },[])
    
//    console.log(result);

   return[result];
}

