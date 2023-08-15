import { View,TextInput } from "react-native";
import Text from '@kaloraat/react-native-text';

const UserInput = ({name,value,setValue}) =>{
return(
    <View style={{ marginHorizontal:24 }}>
    <Text semi  >{name}</Text>
    <TextInput
    style={{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor: "#333",
        marginBottom:30
    }}
    value={value}
    onChangeText={(text) => setValue(text)} 
    />
</View>
);
}

export default UserInput;