
import AsyncStorage from '@react-native-async-storage/async-storage';
import myapi from "../api/myapi";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { useState,useEffect } from 'react';
import { FlatList, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

const WishlistScreen = () =>{

    const navigation = useNavigation();
    const [userId,setUsrId] = useState(null);
    const[wishlist,setWishList] = useState([]);

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

       const getWishlist = () =>{
            myapi.post('view/wishlist/',{
        usr_id: userId
      }).then(function(response){
       // console.log(userId);
        console.log(response.data)
        setWishList(response.data.res);


      }).catch(function(error){
        console.log(error);
      })   
       } 

        useEffect(()=>{
         getUserId();
         getWishlist();
       },[]) 

      const deleteItem = (user_id,prod_id) =>{
        myapi.post('delete/wishlist/',{
          usr_id: user_id,
          prod_id: prod_id
        }). then(function(response){
          setFeedback(response.data.message);

        }).catch(function(error){
          console.log(error);
        })
        getWishlist();

      }
  
      
    
    
   
   
      
      return(
        <ScrollView>
        {wishlist == null ?<Text style={styles.empty}>Empty wishlist</Text>:null}

            <FlatList 
             horizontal
             showsHorizontalScrollIndicator={false}
            data={wishlist}
            keyExtractor={(item) => item.prod_id}
            renderItem={({item}) =>{
                return(
                  <TouchableOpacity onPress={() => navigation.navigate('Product',{prod_id: prod_id})}>
                     <ProductCard prod_id={item.prod_id}/>
                  </TouchableOpacity>
                   
                )
            }}/>
        </ScrollView>
      )

    


}
const styles = StyleSheet.create({
   empty:{
    textAlign: 'center',
    fontSize: 30,
  
 
   }
})

export default WishlistScreen;