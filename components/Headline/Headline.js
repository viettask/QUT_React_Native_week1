import React from 'react';
import {Text, View, Image, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/styles.js';
import logo from '../../assets/icon.png';
import HeadlineText from './HeadlineText.js';
import HeadlineImage from './HeadlineImage.js';

function Headline(props) {
  return (
    <View>
          <HeadlineText text={props.text} />
          <HeadlineImage source={logo}/>
    </View>
  )
}

export default Headline;
