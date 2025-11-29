//npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated
import * as React from 'react';
import { Button, View, Text , StyleSheet } from 'react-native';
// import styles from '../../styles/styles.js';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.HomeScreen}> 
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
