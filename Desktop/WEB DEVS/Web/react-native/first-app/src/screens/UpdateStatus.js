import { View,StyleSheet,TextInput,Text,Button } from "react-native";
import { useState } from "react";


const UpdateStatus = () =>{
   [username,setUserName] =  useState('Osborn');

  
return (
<View  style={styles.container} >

<TextInput style={styles.textInput} placeholder="Enter name"  onChangeText={(username) => {setUserName(username)}}  />
<TextInput style={styles.textInput} placeholder="Enter name"  onChangeText={(username) => {setUserName(username)}}  />
<TextInput style={styles.textInput} placeholder="Enter name"  onChangeText={(username) => {setUserName(username)}}  />
<Text></Text>
<Button  style={styles.button}
title='Update name'
color='purple'

/>

{/* <Text>Name: {username}  </Text> */}
</View>
);
}

const styles = StyleSheet.create({
container:{
   margin: 10,
  justifyContent: 'center'
  
},
textInput:{
   padding:10,
  borderBottomWidth: 1,

},
button:{
  margin:10
}
});

export default UpdateStatus;