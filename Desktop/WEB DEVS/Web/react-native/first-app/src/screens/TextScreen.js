import React,{useState} from 'react';
import { Text,View,StyleSheet,TextInput } from "react-native";

const TextScreen = () =>{
    const [name,setName] = useState('');
return <View>
    <Text>Enter name</Text>
   <TextInput 
   style={styles.input} 
   autoCapitalize="none"
   autoCorrect={false}
    value={name}
    onChangeText={(newValue) => setName(newValue)}
   
   />
<Text>My name is: {name}</Text>
{ name.length < 5 ? <Text>Password must be longer than 5 characters</Text>: null}
</View>
}

const styles = StyleSheet.create({
    input:{
        margin:10,
        borderColor: 'black',
        borderWidth:1
    }
});

export default TextScreen;