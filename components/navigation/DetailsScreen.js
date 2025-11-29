import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
// import styles from '../../styles/styles.js';


function DetailsScreen({ navigation }) {
  return (
    <View style={styles.DetailsScreen}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}


const styles = StyleSheet.create({
    DetailsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DetailsScreen
