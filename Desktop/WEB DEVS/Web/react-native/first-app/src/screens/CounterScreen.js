import { useState } from "react";
import { Text,View,StyleSheet,Button } from "react-native";

const CounterScreen = () =>{
    // let counter = 0;
   let [counter, setCounter] = useState(0);
    const increaseCount = () =>{
        setCounter(counter++);
    }
    const decreaseCount = () =>{
        setCounter(counter--);
    }
    return(
    <View style={styles.container}>
        <Button title="Increase" onPress={increaseCount} />
        <Button title="Decrease" onPress={decreaseCount}/>
     <Text>Current Count: {counter} </Text>
    </View>
    );

}
const styles = StyleSheet.create({
 container:{
    justifyContent:"center",
    alignItems:"center"
 }
})

export default CounterScreen;