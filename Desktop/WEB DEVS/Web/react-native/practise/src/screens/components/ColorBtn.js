import { View ,StyleSheet, TouchableOpacity,Text} from "react-native";


const ColorBtn = ({color}) =>{
    const changeColor = () =>{
     setColor(color);
    }
 return( 
     <TouchableOpacity 
     
     style={{backgroundColor: color, padding:40, margin:10,flex:1}}
     onPress={changeColor}
    />
    

)}
const styles = StyleSheet.create({
colorBtnStyle:{
   
}
})

export default ColorBtn;