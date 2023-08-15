import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({title,results,navigation}) =>{
    //application check if there any results
    if(!results.length){
        return null;
    }
    //results array
    return (
           <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
           <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            //item == object iterating over(results)
            renderItem={({item})=> {
                //item.name == results.name 
                return ( 
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id: item.id})}>
                <ResultsDetail  result={item}  />
                  </TouchableOpacity>)

            }}
           />
            </View>
            )
        }

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10,
        
    }

})

export default withNavigation(ResultsList);