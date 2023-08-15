import { View, StyleSheet ,Text} from "react-native";

const ViewColor = ({color}) =>{
return(
    <View style={{backgroundColor: color , margin:20 , padding:50 }}>
       <Text style={{color: 'white'}}>{color}</Text>
    </View>
)
}

const style = StyleSheet.create({

})

export default ViewColor;