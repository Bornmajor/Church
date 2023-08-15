import myapi from "../api/myapi";
import { Image,StyleSheet } from "react-native";
import { useState,useEffect } from "react";


const CartImage  = ({prod_id}) =>{

    const [img_url,setImageUrl] = useState('https://placehold.co/250x200');

    const  getImage = () =>{
        // Make a request for a user with a given ID
        myapi.get(`image/?prod_id=${prod_id}`)
        .then(function (response) {
        // handle success
       // console.log(response.data.res);
        setImageUrl(response.data.res.img_url);
    
        })
        .catch(function (error) {
         console.log(error);
    
        })
    
        }
    
        useEffect(()=>{
            getImage();
        },[])
        

  return(<Image style={styles.image} source={{ uri: img_url}}/>)
}

const styles = StyleSheet.create({
    image:{
        width:150,
        height:100
    }
})

export default CartImage;