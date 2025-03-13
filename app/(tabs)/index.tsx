import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";



export default function Index() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Hello StickerSmash !!</Text>
      <Link href="/about" style={styles.button}>Go to About Screen</Link>
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
  text:{
    color:'#fff',
  },
  button:{
    color:'#fff',
    backgroundColor:'#1f6feb',
    padding:10,
    borderRadius:5,
    marginTop:20
  }

});
