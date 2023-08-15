import { StyleSheet, Text, View } from 'react-native';
// import React from "react";

const Welcome = (props) =>{
return (
<View>
    <Text>Hello {props.name}</Text>
</View>
);
} 

export default Welcome;