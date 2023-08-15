import { View,Text,Button,ScrollView,TouchableOpacity,Image, StyleSheet } from "react-native";


const HomeScreen = ({navigation}) =>{
 return(<ScrollView >
   <View style={styles.container}>

   <TouchableOpacity style={styles.touchOpacity} onPress={() => navigation.navigate('Users')}>
     <Image style={styles.image} source={ require('../assets/catalogue.png')} />
     <Text style={styles.title}>Categories</Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.touchOpacity} onPress={() => navigation.navigate('Users')}>
     <Image style={styles.image} source={ require('../assets/users.png')} />
     <Text style={styles.title}>Users</Text>
   </TouchableOpacity>

 
   <TouchableOpacity style={styles.touchOpacity} onPress={() => navigation.navigate('Product')}>
     <Image style={styles.image} source={ require('../assets/product.png')} />
     <Text style={styles.title}>Products</Text>
   </TouchableOpacity>


  </View>
 </ScrollView>)
}

const styles = StyleSheet.create({
   container:{
      // flex:1,
      // alignItems:'center',
      // justifyContent:'center',
      // flexDirection: 'row'
   },
   touchOpacity:{
      backgroundColor:'#ded7d7',
      padding:10,
      margin:10,
      flexDirection: 'row',
      alignItems: 'center'

   },
   image:{
      width: 120,
      height:80
   },
   title:{
      fontSize:20
   }
})

export default HomeScreen;