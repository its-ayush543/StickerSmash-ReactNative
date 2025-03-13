import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: 'Oops! Not Found'}} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>Go to HomeScreen</Link>
        </View>

    </>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button:{
        color:'#fff',
        backgroundColor:'red',
        padding:10,
        borderRadius:5,
        marginTop:20
      }
  });
