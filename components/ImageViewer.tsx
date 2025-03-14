import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props={
    imgSource: ImageSource;
}

export default function ImageViewer({imgSource}:Props) {
  return (
    <Image source={imgSource} style={styles.image}/>
  );
}
const styles = StyleSheet.create({
    image:{
        width:350,
        height:460,
        borderRadius:18,
    }
})
