import { View,TextInput,Text } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import ProfileUser from "./components/profileUser";


const InputText = () =>{
    [text,setText] = useState();

return(
    <View>
    
    <View style={styles.viewStyle}>
        <FontAwesome name="search" size={24} color="black" style={{margin:5}} />
        <TextInput placeholder="Enter text"  style={styles.textStyle} value={text}     onChangeText={(newValue) => setText(newValue)} /> 
    </View>
 
    <Text style={{margin:10}}>{text}</Text>
    
  
  <ProfileUser username='Osborn' />
  <ProfileUser username='Oscar' />
  <ProfileUser username='Rhoda' />

  
   </View>
)
}

const styles = StyleSheet.create({
 viewStyle:{
    flexDirection: 'row',
    backgroundColor: '#B2BEB5',
    margin:10,
    padding:5
 },
 textStyle:{
 flex:1
 }
})

export default InputText;