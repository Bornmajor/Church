import {View, ScrollView, Text,FlatList,Image,Button} from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';
import ApiResponse from './components/ApiResponse';
import ResultsList from './components/ResultList';
import { StyleSheet } from 'react-native';

// articles[0].source articles[3].title results[0].title id date_of_birth  employment employment.title


const ApiScreen = () =>{

const[result] = ApiResponse();


return (<View>

  {/* <Text style={styles.text}>User ID - {result[0].id}</Text> */}
  <FlatList 
  data={result}
  keyExtractor={item=> item.id}
  renderItem={({item}) => {
    return(<View style={styles.item}>
         <Text>User ID :{item.id}</Text>
         <Text>User Name: {item.name}</Text>
         <Text>Email:{item.email}</Text>
         <Text>Phone Number: {item.phone}</Text>
        </View>
       
    )
  }}

  
  />


  <Button style={styles.button} title='Generate Data' onPress={callResponse}/>
</View>)

}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#ffc0cb',
        padding:10,
        margin:10

    },
    image:{
        width: 350,
        height:300
    },
    text:{
        marginHorizontal:5
    },
    button:{
       margin:10 
    }
})

export default ApiScreen;