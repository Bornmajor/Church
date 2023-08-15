import {View,Text ,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp';
import { useState,useEffect} from 'react';

const ResultsShowScreen =({navigation}) =>{

    const [result,setResult] = useState(null);

    const id = navigation.getParam('id');

    console.log(result);
     
    const getResult = async (id) =>{
    const response =  await yelp.get(`/${id}`);
    setResult(response.data);

    };

    useEffect (()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }
    //flatlist use to loop over any list

    return (<View>
        <Text>{result.name}</Text>
        
        <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            // return <Text>{item}</Text>
            return <Image style={styles.image} source={{uri: item }}/>
            // return <Image source={{uri: item }} />
        }}
        
        />
    </View>)
}
const styles = StyleSheet.create({
    image:{
       height: 200,
       width:300 
    }
})

export default ResultsShowScreen;