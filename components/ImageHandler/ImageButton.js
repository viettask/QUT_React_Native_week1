import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function ImageButton(props) {
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        props.setSelectedImage(pickerResult["assets"][0].uri);
    }


    return (
        <TouchableOpacity onPress={openImagePickerAsync} style={{ backgroundColor: 'blue' }}>
            <Text style={{ color: 'white', padding: 10, fontSize: 20 }}>Pick a photo</Text>
        </TouchableOpacity>
    )
}

export default ImageButton;
