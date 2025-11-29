import React, { useState } from "react"; 

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';

//import your styles and components
import styles from './styles/styles.js';
import Headline from './components/Headline/Headline.js';
import ImageHandler from './components/ImageHandler/ImageHandler.js';
import LikeCounter from './components/Button/LikeCounter.js';

//install expo-image-picker npm install expo-image-picker
import * as ImagePicker from 'expo-image-picker';

//npx expo install @react-navigation/native @react-navigation/native-stack
//npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import your screens
import HomeScreen from './components/navigation/HomeScreen.js';
import DetailsScreen from './components/navigation/DetailsScreen.js';


const Stack = createStackNavigator();





function BodyText(props) {
  return (
    <Text style={styles.BodyText}>{props.text}</Text>
  );
}

 function updateText(newText) { 
   setState((oldState) => ({ ...oldstate, txt: newText })); 
 } 


export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  const [state, setState] = useState({ txt: "" }); 

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }} showsVerticalScrollIndicator={true}>
          {/* <View style={[styles.container, styles.Viewcontainer]}> */}

          <View style={styles.TopView}>
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
          {/* Just some space so you can actually scroll and see it works */}
          {/* <View style={{ height: 600 }} /> */}

          <Text style={styles.item}>Hello World</Text>
          <Text style={styles.item}>Hello World</Text>

          <TextInput
            style={styles.input}
            placeholder="please enter name"
            placeholderTextColor="blue"
            defaultValue={state.txt}
            onChangeText={updateText}
            autoFocus={true}
            autoCorrect={true}
          /> 
        </ScrollView>

        <View style={styles.BottomView}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </View>

        {/* <View style={{ height: 300 }} >
        </View> */}




      </View>
    </NavigationContainer>
  );
}


