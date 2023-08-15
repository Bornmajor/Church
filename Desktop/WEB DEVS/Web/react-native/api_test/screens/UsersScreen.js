import getUsers from "../components/getUsers";
import { View,FlatList,Text, StyleSheet,ScrollView } from "react-native";
import User from "../components/User";
import AddUser from "../components/AddUser";

const UsersScreen = () =>{
    const [users] = getUsers();

    return(
        <>
            <AddUser />
            <ScrollView>
            <FlatList 
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return(<View>
                
                    <User item={item} />
                </View>)
            }}
            />
            </ScrollView>
        </>
    )

    const styles = StyleSheet.create({

    })



}

export default UsersScreen;