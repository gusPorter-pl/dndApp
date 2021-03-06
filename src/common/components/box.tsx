import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle
} from 'react-native';

import styles from '../styles';

const box1 = require('../../resources/boxes/other-empty.jpg');
const box2 = require('../../resources/boxes/empty.jpg');
const box3 = require('../../resources/boxes/small-empty.jpg');

interface Props {
  text: string;
  type: 0 | 1 | 2;
  style?: ViewStyle;
  function?: () => void;
}

export default function Box(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.function) {
          props.function();
        }
      }}
      activeOpacity={props.function ? 0.7 : 1}
      style={props.type === 2 ? {width: 140} : {}}
    >
      <View style={[styles.centre, props.style]}>
        {props.type === 0 && <Image source={box1} style={boxStyles.size} />}
        {props.type === 1 && <Image source={box2} style={boxStyles.size} />}
        {props.type === 2 && <Image source={box3} style={boxStyles.size} />}
        <View style={boxStyles.overlapView}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={boxStyles.overlapText}
          >
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const boxStyles = StyleSheet.create({
  size: {
    width: '100%',
    height: 60,
    resizeMode: 'stretch'
  },
  overlapView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlapText: {
    color: '#000',
    fontSize: 22
  }
});
