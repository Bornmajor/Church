import ItemImage from "../components/ItemImage";
import { View,Text, StyleSheet,TouchableOpacity,FlatList } from "react-native";
import myapi from "../api/myapi";
import { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductItem = () =>{
     const navigation = useNavigation();
    const [error,setError] = useState('');    
    const [data,setData] = useState([]);
    const [userId,setUsrId] = useState(null);

    const[feedback,setFeedback] = useState("");

   //get usr id
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
    
    useEffect(()=>{
   getUserId();
    },[])
  // Make a request for a user with a given ID
  myapi.get('products/')
  .then(function (response) {
    // handle success
    //console.log(response);
     setData(response.data.res);
  })
  .catch(function (error) {
    // handle error
    console.log(error.response.data);
    setError(error.response.data)
  })
  .finally(function () {
    // always executed
  });

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


    return(
     <View style={styles.container}>
         {feedback ?<View style={styles.feeds}> 
        <Text style={{fontSize: 20,color: '#2d5543'}}>{feedback}</Text>
        </View>: null}

    {/* {error?  <View style={styles.errorContainer}>
         <ActivityIndicator size="large"/>

    </View> : null}  */}

          <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={data}
    keyExtractor={(item)=> item.prod_id}
    renderItem={ ({item}) => {
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Product',{prod_id: item.prod_id})}>
           <View style={styles.item}>
          <ItemImage prod_id={item.prod_id}/>

          <View>
          
             <Text style={styles.prodTitle}>{item.prod_title}</Text>

             <View style={styles.btncontainer} >
                 <TouchableOpacity style={styles.btn} onPress={() => addCart(item.prod_id,userId,1)}>
                 <FontAwesome5 name="cart-plus" size={25} color="white" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={() => addWishlist(item.prod_id,userId)}>
                  <AntDesign name="heart" size={25} color="white" />
              </TouchableOpacity>
             </View>

           
                

          </View>
         
          </View>
        </TouchableOpacity>
       
      )
    }} />
    </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
  marginBottom: 30
  },
  feeds:{
    backgroundColor: "#d1e7dd",
    padding: 10,
    zIndex:100,
    width: '100%'

},
  btncontainer:{
   flexDirection:'row',
   marginBottom:10,
  },
    btn:{
      backgroundColor:'green',
      padding:5,
      margin:5,
      borderRadius:5
  },
    wishlist_title_cont:{
     margin:5
    },
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

   
export default ProductItem;