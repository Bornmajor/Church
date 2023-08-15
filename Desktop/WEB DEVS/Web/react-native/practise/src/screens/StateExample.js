import { View,Text,StyleSheet } from "react-native";
import ColorBtn from "./components/ColorBtn";
import ViewColor from "./components/ViewColor";
import { useState } from "react";
import ProfileUser from "./components/profileUser";

const StateExample = () =>{
   [color,setColor] = useState('gray');



return( 
<View>

 <View style={styles.viewStyle}>
   <ColorBtn  color='red' />
   <ColorBtn  color='black'  />
   <ColorBtn  color='green' />
 </View>

 <ViewColor color={color} />

 </View>
 
 )
}
const styles = StyleSheet.create({
 viewStyle:{
    margin:10,
    flexDirection: 'row'
 }
})

export default StateExample;