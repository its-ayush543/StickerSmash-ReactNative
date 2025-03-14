import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props={
    imgSource: ImageSource;
    selectedImage? : string;
}

export default function ImageViewer({imgSource, selectedImage}:Props) {
  const imageSource = selectedImage ? {uri:selectedImage} : imgSource;
  return (
    <Image source={imageSource} style={styles.image}/>
  );
}
const styles = StyleSheet.create({
    image:{
        width:350,
        height:460,
        borderRadius:18,
    }
})
