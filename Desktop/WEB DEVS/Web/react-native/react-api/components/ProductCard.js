import{View,StyleSheet,Text} from 'react-native';
import myapi from '../api/myapi';
import { useState,useEffect } from 'react';
import ItemImage from './ItemImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const ProductCard = ({prod_id}) =>{
    const navigation = useNavigation();
    const [prod,setProd] = useState([]);

const getProduct = () =>{
    myapi.get(`products/?prod_id=${prod_id}`)
    .then(function(response){

        setProd(response.data.res)
      
    })
    .catch(function(error){
        console.log(error)
    })
}
useEffect(()=>{
       getProduct();
},[])
return(
   
       <View style={styles.item}>
        <ItemImage prod_id={prod.prod_id} />

        <Text style={styles.prodTitle}>{prod.prod_title}</Text>
        <Text style={{padding:5}}>Ksh {prod.price}</Text>
        
      
    </View> 
 
 
)

}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#ded7d7',
        borderRadius: 10,
        width:250,
        margin:10
     
        
      },
      prodTitle:{
       padding:5,
       fontWeight: '700'
     
      }
})

export default ProductCard;