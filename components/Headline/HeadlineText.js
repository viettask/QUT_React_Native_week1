import React from 'react';
import {Text, View, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/styles.js';

function HeadlineText(props) {
  return (
    <View>
          <Text style={styles.HeadlineText}>{props.text}</Text>
    </View>
  )
}

export default HeadlineText;
