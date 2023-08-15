import { View,StyleSheet,Image,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const User = ({ item  }) =>{

    const navigation = useNavigation();
    // console.log(navigation);
    // console.log(item.img_url);
    return(<TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Profile',{id: item.id }) } >
       <View>
         <Image style={styles.image} source={ require('../assets/man_2922510.png')} />  
       </View>
           
        <View>
         <Text style={styles.name}>{item.name}</Text>   
        </View>
       
     
    

    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ded7d7',
        padding:10,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    name:{
        fontSize:18

    },
    image:{
        width: 80,
      height:80
    }
})

export default User;