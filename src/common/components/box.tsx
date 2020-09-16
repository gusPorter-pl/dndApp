import React from 'react';
import {View, Text, TouchableOpacity, Image, ViewStyle} from 'react-native';

import styles from '../styles';

const box1 = require('../../resources/boxes/other-empty.jpg');
const box2 = require('../../resources/boxes/empty.jpg');

interface Props {
  text: string;
  type: 0 | 1;
  function?: () => void;
  style?: ViewStyle;
}

export default function Box(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.function();
      }}
      activeOpacity={0.7}
    >
      <View style={[styles.container, props.style]}>
        {props.type === 0 && (
          <Image
            source={box1}
            style={{width: 350, height: 60, resizeMode: 'stretch'}}
          />
        )}
        {props.type === 1 && (
          <Image
            source={box2}
            style={{width: 350, height: 60, resizeMode: 'stretch'}}
          />
        )}
        <View style={styles.overlapView}>
          <Text style={styles.overlapText}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
