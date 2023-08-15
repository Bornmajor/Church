import AsyncStorage from '@react-native-async-storage/async-storage';
import myapi from '../api/myapi';
import { View,Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import CartImage from '../components/CartImage';
import ProductTitle from '../components/ProductTitle';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

const CartScreen = () =>{

    const [userId,setUsrId] = useState(null);
    const [cartlist,setCartList] = useState([]);
    const [total,setTotal] = useState('');
    const [feedback,setFeedback] = useState('');
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

      const getTotal = (user_id) =>{
           myapi.post('view/cart/?sub_total=1',{
        usr_id: user_id
      }).then(function(response){
       setTotal(response.data.res)

      }).catch(function(error){
        console.log(error);
      })

      }
   
      const getCartItems = async(user_id) =>{ 
        const response = await myapi.post('view/cart/',{usr_id: user_id})
        try{
        console.log(response.data);
        setCartList(response.data.res)
        }catch (err){
          console.log(err);
        }
      

      }
    

      useEffect(()=>{
        getUserId(); 
         if(userId !== null){
        getCartItems(userId);
        getTotal(userId);
      }
      },[])

      
     

    

      const deleteItem = (user_id,prod_id) =>{
        myapi.post('delete/cart/',{
          usr_id: user_id,
          prod_id: prod_id
        }). then(function(response){
          setFeedback(response.data.message);

        }).catch(function(error){
          console.log(error);
        })
        getCartItems();
        getTotal();

      }

      return(
        
    <ScrollView>
        {cartlist == null ?<Text style={styles.empty}>Empty wishlist</Text>:null}

        {feedback?<Text style={styles.feeds}>{feedback}</Text> :null}


      
       <View style={styles.subtotal_container}>
          <View style={styles.iconCart}>
               <FontAwesome name="shopping-cart" size={60} color="black" />
          </View>
          
          <View style={styles.priceContainer}>
          <Text style={{fontSize:20}}>Total price</Text>
        <Text style={{fontSize:18}}>Ksh {total}</Text>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={{color:'white'}}>Place order</Text>
        </TouchableOpacity>
          </View>

       </View>

      <FlatList 
      data={cartlist}
      keyExtractor={(item) => item.prod_id}
      renderItem={({item}) =>{
        return(
            <View style={styles.cart_item}>

                <CartImage prod_id={item.prod_id} />


                <View style={{padding:10}}>
               <View>
                 <ProductTitle prod_id={item.prod_id}/>
                 
                 <Text >{item.price}</Text>

                </View>

                <View >
                <TouchableOpacity onPress={() => deleteItem(userId,item.prod_id)}>
                  <MaterialIcons name="delete" size={25} color="black" />   
                </TouchableOpacity>
                </View>
                </View>

              



            </View>
        )
      }}
      
      />
    </ScrollView>  
      )

}

const styles = StyleSheet.create({
  feeds:{
    backgroundColor: "#d1e7dd",
    padding: 10,
    zIndex:100,
    width: '100%',
    fontSize:20

},
  iconCart:{
   flex:1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  priceContainer:{
   flex:1
  },
    orderBtn:{
      backgroundColor: 'green',
      padding:10,
      marginVertical:10,
      borderRadius: 5,
      width: 100

    },
     subtotal_container:{
      backgroundColor: '#ded7d7',
      padding:10,
      margin:10,
      flexDirection: 'row'

     },
    cart_item:{
        margin:10,
        flexDirection: 'row',
        backgroundColor: '#ded7d7',
        flex:1,
        borderRadius:5
        
    },
    empty:{
      textAlign: 'center',
      fontSize: 30,
    
   
     }
})

export default CartScreen;