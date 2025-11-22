import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

function HeadlineText(props) {
  return (
    <Text style={styles.HeadlineText}>{props.text}</Text>
  );
}

function BodyText(props) {
  return (
    <Text style={styles.BodyText}>{props.text}</Text>
  );
}

export default function App() {
  return (

    <View style={styles.container}>
<<<<<<< HEAD
      <HeadlineText text="Photo Sharer" />
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200 }}
      />
      <BodyText text="To share a photo from your phone with a friend,just press the button below!" />
=======
      <Text>Hi Viet Nguyen</Text>
>>>>>>> f3ea81a05e09149c9d804885d516b63294b038e7
      <StatusBar style="auto" />
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BodyText: {
    fontSize: 18,
    color: '#888',
    margin: 10,
  },
  HeadlineText: {
    fontSize: 40,
    color: '#080',
    margin: 10,
  },
});
