import axios from "axios";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

const [item,setItem] = useState(<ActivityIndicator size="large" color="green" />);

const useProduct = (prod_id) =>{
    axios.get(`https://d2f2-197-237-43-191.ngrok-free.app/file/react-api/products/?prod_id=${prod_id}`)
    .then(function (response) {

        setItem(response.data.res);
    
      })
      .catch(function (error) {
        // handle error
        console.log(error.response);
 
      })

    return[item];
    
}

export default useProduct;