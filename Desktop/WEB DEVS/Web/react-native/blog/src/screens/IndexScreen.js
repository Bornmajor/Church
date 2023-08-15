import { View,Text,StyleSheet,FlatList,Button } from "react-native";
import { useContext } from "react";
import {Context} from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({navigation}) =>{

    const { state, addBlogPost,deleteBlogPost} = useContext(Context);
    return(
        <View>
          
            <Button 
            title="Add blog" 
            onPress={addBlogPost}
            />
          <FlatList
           data={state}
           keyExtractor={(blogPosts) => blogPosts.title}
           renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id}) }>
            <View style={styles.row}>
                   <Text style={styles.title}>{item.title} - {item.id}</Text>
                   <TouchableOpacity onPress={ () => deleteBlogPost(item.id)}>
                   <Feather style={styles.icon} name="trash"  color="black" />
                   </TouchableOpacity>
                  
            </View>  
             </TouchableOpacity>
            )
         
           }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) =>{
    return{
     headerRight: () =>(
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={24} color="black" /> 
     </TouchableOpacity>
     ) 
   
 
    };
}
const styles = StyleSheet.create({
 row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: 'gray'
 },
 title:{
    fontSize:18
 },
 icon:{
    fontSize:24
 }
})

export default IndexScreen;