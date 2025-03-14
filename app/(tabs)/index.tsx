
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


const PlaceholderImagge = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImagge}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo"/>
        <Button label="Use this Photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#25292e',
    alignItems:'center',
    justifyContent:'center'
  },
  imageContainer:{
    flex:1,
  },
  
  footerContainer:{
    flex:1/3,
    alignItems:'center',
  }

});
