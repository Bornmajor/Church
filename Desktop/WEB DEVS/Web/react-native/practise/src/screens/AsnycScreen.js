import { View, StyleSheet,Text } from "react-native";
import SignUp from "./components/SignUp";
import { useState } from "react";



const AsyncScreen = () =>{
[username,setUsername]= useState('');
[pwd,setPwd] = useState('');

return(
<View>

<SignUp
 usr={username}
 pwd={pwd}
/>

{/* <Text>{username}</Text>
<Text>{pwd}</Text> */}

</View>);
}

const styles = StyleSheet.create({

})


export default AsyncScreen;