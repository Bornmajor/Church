import { View , Text ,Button,StyleSheet,TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


const HomeScreen = ({navigation})=>{
return (
    <ScrollView>
         
<View style={styles.container} >
        <TouchableOpacity
        style={styles.opacityStyle}
        onPress={() =>{navigation.navigate('Home')}}
        >
        <FontAwesome5 name="home" size={24} color="white"/>
        <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.opacityStyle}
        onPress={() =>{navigation.navigate('Profile')}}>
        <FontAwesome5 name="user-alt" size={24} color="white" />
        <Text style={styles.textStyle}>Profile</Text>
        </TouchableOpacity>
</View>
          
<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('State')}}>
         <FontAwesome5 name="tree" size={24} color="white" />
         <Text style={styles.textStyle}>State example</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('Text')}}>
          <FontAwesome5 name="acquisitions-incorporated" size={24} color="white" />
            <Text style={styles.textStyle}>Text</Text>
        </TouchableOpacity>
       
</View>

<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('Image')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('SignUp')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Sign up</Text>
        </TouchableOpacity>
       
</View>

<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('Login')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('Sqlite')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Sqlite</Text>
        </TouchableOpacity>

  
</View>

<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('List')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>List</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('Api')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Api screen</Text>
        </TouchableOpacity>

      

  
</View>

<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('yts')}}>
         <FontAwesome5 name="youtube-square" size={24} color="white" />
         <Text style={styles.textStyle}>YouTube player</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('testapi')}}>
         <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>My api test</Text>
        </TouchableOpacity>
        
          
</View>

<View style={styles.container} >
        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('drawer')}}>
        <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('activity')}}>
        <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>ActivityIndicator</Text>
        </TouchableOpacity>         
</View>
     

<View style={styles.container} >

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('cam')}}>
    <FontAwesome5 name="camera" size={24} color="white" />
         <Text style={styles.textStyle}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.opacityStyle}
         onPress={() =>{navigation.navigate('form')}}>
    <FontAwesome5 name="file-image" size={24} color="white" />
         <Text style={styles.textStyle}>Form elements</Text>
        </TouchableOpacity>
        
</View>

     




    </ScrollView>
)
}

const styles = StyleSheet.create({
    container:{
     flexDirection: 'row'
      
    },
    opacityStyle:{
        backgroundColor: 'tomato',
        margin:10,
        padding:30,
        flex:1,
        flexDirection: 'row'
    
        

    },
    textStyle:{
        marginHorizontal:15,
        color: 'white',
        fontWeight: 300,
    }
})


export default HomeScreen;