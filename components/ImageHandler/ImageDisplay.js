import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function ImageDisplay(props) {

    if (props.selectedImage == null) {
        return (
            <Image source={{ uri: props.selectedImage }} style={{ width: 300, height: 300 }}>
            </Image>
        )
    }
    else {
        return null;
    }
}

export default ImageDisplay;
