import { View,Text } from "react-native"
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { StyleSheet } from "react-native";

const FormElement = () =>{
    const [isChecked, setChecked] = useState(false);
return(
    <View style={styles.container}>
        <View style={styles.section}>
    <Checkbox  style={styles.checkbox} 
     value={isChecked} 
    onValueChange={setChecked} 
    color={isChecked ? 'red' : undefined}
    />
    <Text style={styles.paragraph}>Checkbox</Text>
    </View> 
    </View>
   
  
)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });

export default FormElement;