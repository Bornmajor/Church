import {View,Text,Image,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import myapi from '../api/myapi';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const CatItem = () =>{
     
  const navigation = useNavigation();

    const [error,setError] = useState('');    
    const [feedback,setFeedback] = useState([]);
  
    const getCatItem = () =>{
  // Make a request for a user with a given ID
    myapi.get('categories/')
    .then(function (response) {
      // handle success
      //console.log(response);
      setFeedback(response.data.res);
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
      setError(error.response.data)
    })
    .finally(function () {
      // always executed
    });
    }

    useEffect(()=>{
    getCatItem();
    },[])
 

    return(
     <View>

    {error?  <View style={styles.errorContainer}>
        <Foundation  name="alert" size={100} color="black" />
        <Text style={styles.errotTxt}>Network error</Text>

    </View> : null} 

          <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={feedback}
    keyExtractor={(item)=> item.cat_id}
    renderItem={ ({item}) => {
      return(
        <TouchableOpacity onPress={() => navigation.navigate('Category',{cat_id: item.cat_id , cat_title: item.cat_title})}>
           <View style={styles.item}>
          <Image style={styles.image} source={{uri : item.img_url}}/>
          <Text style={styles.prodTitle}>{item.cat_title}</Text>
          </View>
        </TouchableOpacity>
       
      )
    }} />
    </View>
    )
}

const styles = StyleSheet.create({
    item:{
      backgroundColor: '#ded7d7',
      borderRadius: 5,
      width:200,
      margin:10
   
      
    },
    prodTitle:{
     padding:5,
     fontSize:18,
     fontWeight: '700'
   
    },
    image:{
        width:200,
        height:200
    }
   })


export default CatItem;