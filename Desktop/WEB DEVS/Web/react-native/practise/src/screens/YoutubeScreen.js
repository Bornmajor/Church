import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Linking,Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


const YoutubeScreen = () =>{
    const [playing, setPlaying] = useState(false);

  
    return (
      <View>
        <YoutubePlayer
          height={300}
          videoId={"I-ij_hoAdIU"}
    
        />
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://youtube.com/')}>
        Youtube 
        </Text>
      </View>
    );
}

export default YoutubeScreen;