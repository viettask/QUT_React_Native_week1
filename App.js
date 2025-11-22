import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles/styles.js';
import Headline from './components/Headline/Headline.js';
import React from 'react';
import ImageHandler from './components/ImageHandler/ImageHandler.js';
import LikeCounter from './components/Button/LikeCounter.js';

//install expo-image-picker npm install expo-image-picker
import * as ImagePicker from 'expo-image-picker';


function BodyText(props) {
  return (
    <Text style={styles.BodyText}>{props.text}</Text>
  );
}



export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  return (

    <View style={styles.container}>
      <Headline text="Photo Share" />


      {/* <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200 }}
      /> */}

      <BodyText text="To share a photo from your phone with a friend,just press the button below!" />

      <ImageHandler selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

      {/* <Text>Hi Viet H Nguyen</Text> */}
      <LikeCounter />

      <StatusBar style="auto" />

    </View>
  );
}


