import React from 'react';
import {Text, View, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/styles.js';

function HeadlineImage(props) {
  return (
    <Image  
      source={props.source}
      style={styles.HeadlineImage}
    />
  );
}

export default HeadlineImage;