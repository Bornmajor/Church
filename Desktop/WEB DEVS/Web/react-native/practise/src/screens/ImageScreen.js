import { Image,StyleSheet,View,TouchableOpacity,Text,TouchableWithoutFeedback } from "react-native";

const ImageScreen = () =>{
return(
    <View >

       

    <View style={styles.container} >

    <Image style={styles.imgStyle} source={require('../img/person1.jpg')}   /> 

    <View >

        <TouchableOpacity style={styles.touchBtn} onPress={()=>{console.log('Pressed')}}>
            <Text>View profile</Text>
        </TouchableOpacity>
    </View>
  
    </View>
   
   
    </View>
   
    
)
}

const styles = StyleSheet.create({
imgStyle:{
 width:150,
 height:150,
},
container:{
backgroundColor: 'gray',
padding:20,
flexDirection: 'row',
},
touchBtn:{
margin:10,
backgroundColor: 'tomato',
padding:10
}
})

export default ImageScreen;