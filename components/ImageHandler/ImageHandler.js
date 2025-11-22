import React from 'react'
import { View } from 'react-native';
import ImageButton from './ImageButton';
import ImageDisplay from './ImageDisplay';

function ImageHandler(props) {
  return (
    <View>
      <ImageButton selectedImage={props.selectedImage} setSelectedImage={props.setSelectedImage} />
      <ImageDisplay selectedImage={props.selectedImage} />
    </View>
  )
}

export default ImageHandler;
