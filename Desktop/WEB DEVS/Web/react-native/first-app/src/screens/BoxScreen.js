import { StyleSheet, View,Text } from "react-native";

const BoxScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.text2Style}>Child # 2</Text>
            <Text style={styles.text3Style}>Child # 3</Text>
        </View>
    )

}

const styles = StyleSheet.create({

viewStyle:{
  
  borderColor: 'black',
  height: 200,
  flexDirection: 'row'
 


},
 textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex:1,
    height: 100

},
 text2Style: {
    borderWidth: 3,
    borderColor: 'red',
    flex:1,
    marginHorizontal: 20,
    marginTop: 100,
    height: 100


 
},
 text3Style: {
    borderWidth: 3,
    borderColor: 'red',
    flex:1,
    height: 100
    
}

})
export default BoxScreen;