
import myapi from "../api/myapi";
import { Image,StyleSheet,Text } from "react-native";
import { useState,useEffect } from "react";


const ItemImage = ({prod_id}) =>{

    const [img_url,setImageUrl] = useState('https://placehold.co/250x200');
    const [prod,setProd] = useState(prod_id);
    const [error,setError] = useState();

    const  getImage = () =>{
    // Make a request for a user with a given ID
    myapi.get(`image/?prod_id=${prod_id}`)
    .then(function (response) {
    // handle success
    //console.log(response.data.res.img_url);
    setImageUrl(response.data.res.img_url);

    })
    .catch(function (error) {
    // handle error
    // console.log(error.response.data);
    // setError(error.response.data)
    setError('Something went wrong');

    })
    .finally(function () {
    // always executed
    });

    }

    useEffect(()=>{
        getImage();
    },[])
    



    
 
    return(<Image style={styles.image} source={{uri : img_url }}/>)
}

const styles = StyleSheet.create({
    image:{
        width:250,
        height:200
    }
})

export default ItemImage;