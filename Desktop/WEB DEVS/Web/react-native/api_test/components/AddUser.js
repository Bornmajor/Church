import { TouchableOpacity, View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const AddUser = () =>{
    const navigation = useNavigation();
    return(
    <TouchableOpacity  style={styles.container} onPress={()=> navigation.navigate('AddUser') } >       
          <View style={styles.icon}>
          <Ionicons name="add" size={80} color="black" />
          </View>

        <View>
          <Text style={styles.name}>Add User</Text>
        </View>
    
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ded7d7',
        padding:10,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    name:{
        fontSize:18
    },
    icon:{
        backgroundColor: '#f1f1f1',
        borderRadius:10,
        marginRight:25,
        padding:5,
        
   

    }

})

export default AddUser;