import { Text,View,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import { useEffect,useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";

import myapi from "../api/myapi";
import ProductImages from "../components/ProductImages";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";





const ProductItem = ({route}) =>{

    const [userId,setUsrId] = useState(null);
    const [feedback,setFeedback] = useState("");

    const {prod_id} = route.params;

    const [item,setItem] = useState("");
    const [quantity,setQuantity] = useState(1);



    const getUserId = async () => {
        try {
          const usr = await AsyncStorage.getItem('usr_id');
          if (usr !== null || usr !== undefined) {
            // We have data!!
            setUsrId(usr);
            console.log(usr);
            
             
          }else{
            console.log('User id is not set');
          }
        } catch (error) {
          // Error retrieving data
          console.log(error);
        }
    
    
      };
    
       



const getProduct = (prod_id) =>{
    
    myapi.get(`products/?prod_id=${prod_id}`)
    .then(function (response) {

        setItem(response.data.res);
    
      })
      .catch(function (error) {
        // handle error
        console.log(error.response);
 
      })

    
}


useEffect(()=>{
getUserId();
getProduct(prod_id);
},[])


const addWishlist = (prod_id,usr_id) =>{
    myapi.post('wishlist/',{
        prod_id: prod_id,
        usr_id : usr_id
    }
    ).then(function(response){
        setFeedback(response.data.message);


    })
    .catch(function(error){
        console.log(error.response);

    })
}

const addCart = (prod_id,usr_id,quantity) =>{
    myapi.post('cart/',{
        prod_id: prod_id,
        usr_id: usr_id,
        quantity: quantity
    }
    ).then(function(response){
      //  console.log(response);
        setFeedback(response.data.message);

    })
    .catch(function(error){
        console.log(error.response);

    })

}

const addQuantity = () =>{

    setQuantity(quantity+1);
}

const minusQuantity = () =>{
    if(quantity < 2){
        setQuantity(1);

    }else{
        setQuantity(quantity-1);
    }
   
}
return(
    <ScrollView>
        {feedback ?<View style={styles.feeds}> 
        <Text style={{fontSize: 20,color: '#2d5543'}}>{feedback}</Text>
        </View>: null}
    <ProductImages  prod_id={prod_id} />

    <Text style={styles.prod_title}>{item.prod_title}</Text>

    <View style={styles.desc}>
        <Text style={{fontSize:20,fontWeight: '800'}}>Description</Text>
        <Text>{item.prod_desc}</Text>
    </View>
    
    <View style={styles.desc}>
    <Text style={{fontSize:20,fontWeight: '800'}}>Price</Text>
       <Text style={{fontWeight:'500'}}> Ksh <Text style={{fontSize:20,fontWeight:'700'}}>
        {item.price}
        </Text> </Text>  
    </View>
   

    <View style={styles.containerbtns}>
     
     <View style={styles.quantity}>
     <TouchableOpacity style={styles.btn} onPress={addQuantity}>
       <Feather name="plus" size={24} color="white" />
     </TouchableOpacity>

     <TextInput editable={false} selectTextOnFocus={false}  style={styles.textQuantity} value={quantity.toString()} onChangeText={text => setQuantity(text)}/>

     <TouchableOpacity style={styles.btn} onPress={minusQuantity}>
     <Feather name="minus" size={24} color="white" />
     </TouchableOpacity>
      </View>


      
    <TouchableOpacity style={styles.btn} onPress={()=> addCart(prod_id,userId,quantity)}>
    <FontAwesome5 name="cart-plus" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity  style={styles.btn} onPress={() => addWishlist(prod_id,userId)}>
    <AntDesign name="heart" size={30} color="white" />
    </TouchableOpacity>
 
    </View>
  


    </ScrollView>
   
);
}

const styles = StyleSheet.create({
    feeds:{
        backgroundColor: "#d1e7dd",
        padding: 10,
        position: 'sticky',
        zIndex:100,
        width: '100%'

    },
    prod_title:{
        fontSize:20,
        margin:10,
        fontWeight: '700'
    },
    desc:{
        margin:10,
        backgroundColor: '#ced4da',
        borderRadius:5,
        padding:10
    },
  
    containerbtns:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        

    },
    quantity:{
     flexDirection:'row'
    },
    textQuantity:{
     borderRadius:5,
     padding:5,
     textAlign: 'center',
     fontSize:18
    },
    btn:{
   
        backgroundColor:'green',
        fontSize:18,
        padding:10,
        margin:10,
        borderRadius:5
    }

})

export default ProductItem;