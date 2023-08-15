import { useState,useContext } from "react";
import { Text,Button ,View} from "react-native";
import { StyleSheet } from "react-native";
import useUser from "../components/useUserData";
import { FlatList } from "react-native";

const UserScreen = () =>{
  const [users,getUser] = useUser();

  return(
    <View>
     <FlatList 
     data={users}
     keyExtractor={item => item.email}
     renderItem={({item}) => {
      return(
        <View style={styles.item}>
          <Text>{item.username}</Text>
          </View>
      );
     }}
     />
     <Button title='Update' onPress={getUser} />
    </View>
 
  );
}


const styles = StyleSheet.create({
    item:{
        margin:10,
        padding:10,
        backgroundColor: '#ced4da'
    }
})
export default UserScreen;