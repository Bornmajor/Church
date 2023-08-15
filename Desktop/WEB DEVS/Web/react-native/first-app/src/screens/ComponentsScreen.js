import react from "react";
import { View,Text,StyleSheet,Image } from "react-native";

const ComponentsScreen = () =>{
    return (
        <View>
    
    <Text style={styles.textStyle}>This is component screen </Text>
    </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})
export default ComponentsScreen