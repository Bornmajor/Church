import { View,Text,StyleSheet,TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({term ,onTermChange,onTermSubmit}) =>{
  

return(
    <View style={styles.backgroundStyle}>
        <Feather 
        style={styles.iconStyle}
         name="search"  />
        <TextInput 
         autoCapitalize='none'
         autoCorrect={false}
         style={styles.textInput}
         placeholder='Search' 
         value={term}
         onChangeText={onTermChange}
         onEndEditing={onTermSubmit}
         />
    </View>
)
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#D3D3D3',
        height:60,
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal:15,
        marginVertical:15,
        marginBottom:10
      
        
        // margin:10
    },
    iconStyle:{
       fontSize: 35,
       color: 'black',
       alignSelf:'center',
       padding:10
    },
    textInput:{
        marginLeft:10,
        flex:1,
     
        
    }
})

export default  SearchBar;