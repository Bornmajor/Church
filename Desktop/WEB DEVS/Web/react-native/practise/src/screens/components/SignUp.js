import { TextInput ,View,StyleSheet,TouchableOpacity,Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = ({navigation,usr,pwd}) =>{

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('username', usr)
          await AsyncStorage.setItem('password', pwd)

        } catch (e) {
          // saving error
        }
      }

  

return(
    <View style={styles.container}>

        <TextInput 
        style={styles.textPwd}
        placeholder="Username"
        value={usr}
        onChangeText={(val) => setUsername(val)}
      
        />
         <TextInput 
        style={styles.textPwd}
        placeholder="Password"
        secureTextEntry={true}
        value={pwd}
        onChangeText={(val)=> setPwd(val)}
        />

        <TouchableOpacity 
         style={styles.btn}
         onPress={storeData}
         >
            <Text style={{color: 'white'}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.btn}
         onPress={() =>{navigation.navigate('Login')}}
         >
        <Text style={{color: 'white'}}>Proceed login</Text>
        </TouchableOpacity>
       
    </View>

)

}

const styles = StyleSheet.create({
container:{
 margin:20
},
textPwd:{
    backgroundColor: '#A9A9A9',
    padding: 10,
    margin:10
},
btn:{
  margin:10,
  backgroundColor:'orange',
  padding:10,

}
})

export default SignUp;