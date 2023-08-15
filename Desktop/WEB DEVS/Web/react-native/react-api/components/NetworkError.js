import { Foundation } from '@expo/vector-icons';
import { Text,View,StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';

const NetworkError = () =>{
    
    return(
        <View style={styles.errorContainer}>
        <ActivityIndicator style={styles.activityInd}  size="large" color="green" />
        <View style={styles.activityInd}>
        <Foundation  name="alert" size={150} color="black" />
        <Text style={{fontSize: 30, fontWeight: '800'}}>Network error</Text>
        </View>
      
    </View>
    )

}

const styles = StyleSheet.create({
    errorContainer:{
        position: 'absolute',
        width: '100%', 
        zIndex: 100,
        top: 20
       },
       activityInd:{
         flex:1,
         alignItems: 'center',
         justifyContent: 'center',
    
       },
       feedError:{
           padding:10,
           backgroundColor: 'red',
           
       }
})

export default NetworkError;