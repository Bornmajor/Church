import {Text,StyleSheet} from 'react-native';
import myapi from '../api/myapi';
import { useState,useEffect } from 'react';

const ProductTitle = ({prod_id}) =>{

    const[title,setTitle] = useState('');
   

    const getTitle = (prod_id) =>{
        myapi.get(`products/?prod_id=${prod_id}`)
        .then(function(response){
            setTitle(response.data.res.prod_title)

        })
        .catch(function(error){
            console.log(error);
        })
    }
   
    useEffect(()=>{
        getTitle(prod_id);

    },[])
 return(<Text numberOfLines={1} style={styles.titleStyle}>
    {title}
 </Text>)
}
const styles =  StyleSheet.create({
  titleStyle:{
    fontSize:14,
    width:150


  }
})

export default ProductTitle;