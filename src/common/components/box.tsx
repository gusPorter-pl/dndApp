import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewStyle,
  StyleSheet
} from 'react-native';

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
        if (props.function) {
          props.function();
        }
      }}
      activeOpacity={0.7}
    >
      <View style={[styles.centre, props.style]}>
        {props.type === 0 && (
          <Image
            source={box1}
            style={{width: '100%', height: 60, resizeMode: 'stretch'}}
          />
        )}
        {props.type === 1 && (
          <Image
            source={box2}
            style={{width: '100%', height: 60, resizeMode: 'stretch'}}
          />
        )}
        <View style={boxStyles.overlapView}>
          <Text style={boxStyles.overlapText}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const boxStyles = StyleSheet.create({
  overlapView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlapText: {
    color: '#000',
    fontSize: 22
  }
});
