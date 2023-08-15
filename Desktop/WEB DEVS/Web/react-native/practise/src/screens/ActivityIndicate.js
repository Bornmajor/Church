import { ActivityIndicator,View,Button,Text } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

const ActivityIndicate = () =>{
    const [animate,setAnimate] = useState(null);

    const show = () =>{
       setAnimate(true);
    }

    const hide = () =>{
        setAnimate(false);
    }

   return(
   <View style={styles.container}>
 {animate ?  <ActivityIndicator style={styles.activity} size='large' color='red' animating={animate} /> :null }
    
       <Button title='Show activity' onPress={show} />

       <Text></Text>

       <Button title='Hide activity' onPress={hide}/>
   </View>
 
   )
}

const  styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    activity:{
        margin:20
    }
})

export default ActivityIndicate;