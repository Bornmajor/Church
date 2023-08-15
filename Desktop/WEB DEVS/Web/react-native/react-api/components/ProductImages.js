import { Image,FlatList } from "react-native";
import myapi from "../api/myapi";
import { useEffect,useState } from "react";
import { StyleSheet } from "react-native";


const ProductImages = ({prod_id}) =>{

    const [prodImgs,setProdImgs] = useState([]);

    const getImages = (prod_id) =>{
        myapi.get(`images/?prod_id=${prod_id}`)
        .then(function (response) {
    
            setProdImgs(response.data.res);
        
          })
          .catch(function (error) {
            // handle error
            console.log(error.response);
     
          })
    }
    useEffect(()=>{
       getImages(prod_id);
    },[])

return(
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={prodImgs}
    keyExtractor={item  => item.img_url}
    renderItem={({item}) =>{
        return(
            <Image style={styles.img} source={{uri: item.img_url}}/>
        )
    }}

    />
 
)
}

const styles = StyleSheet.create({
    img:{
    width:300,
    height:250,
    margin:10,
    backgroundColor: '#ced4da'
    }
})
export default ProductImages;