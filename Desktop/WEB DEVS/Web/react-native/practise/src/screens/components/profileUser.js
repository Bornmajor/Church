import { View,Text } from "react-native";

const ProfileUser = ({username}) => {
return (<View style={{margin:10,backgroundColor:'#B2BEB5',padding:10}}>
    <Text>{username}</Text>
</View> 
)
}

export default ProfileUser;