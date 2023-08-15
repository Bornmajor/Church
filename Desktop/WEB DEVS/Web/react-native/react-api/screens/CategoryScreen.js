import {View,Button,FlatList,StyleSheet,TouchableOpacity,Text}  from 'react-native'
import { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import myapi from '../api/myapi';
import ItemImage from '../components/ItemImage';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryScreen = ({route}) =>{


    const [data,setData] = useState([]);
    const [feedback,setFeedback] = useState("");
    const navigation = useNavigation();
    
    const [userId,setUsrId] = useState(null);
    
    const {cat_id} = route.params;

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


  
    const getItem = (cat_id) =>{
        myapi.get(`categories/?cat_id=${cat_id}`)
        .then(function(response){
            setData(response.data.res);

        })
        .catch(function(error){
            console.log(error);

        })
    }
  

    useEffect(()=>{
      getUserId();
        getItem(cat_id);
        navigation.setOptions({
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },    
           })
           
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



      return(
        <View>

          {feedback ?<View style={styles.feeds}> 
        <Text style={{fontSize: 20,color: '#2d5543'}}>{feedback}</Text>
        </View>: null}

        <FlatList
       
        data={data}
        keyExtractor={(item)=> item.prod_id}
        renderItem={ ({item}) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate('Product',{prod_id: item.prod_id})}>
               <View style={styles.item}>

              <ItemImage prod_id={item.prod_id}/>
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
            
          

            </TouchableOpacity>
           
          )
        }} />
        </View>
      )


    
}

const styles = StyleSheet.create({
  feeds:{
    backgroundColor: "#d1e7dd",
    padding: 10,
    zIndex:100,
    width: '100%'

},
  btn:{
    backgroundColor:'green',
    padding:5,
    margin:5,
    borderRadius:5
  },
  btncontainer:{
   flexDirection:'row',
   marginBottom:10,
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

   
export default CategoryScreen;