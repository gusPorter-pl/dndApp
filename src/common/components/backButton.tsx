import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colours from '../colours';
import styles from '../styles';

interface Props {
  function: () => void;
}

export default function BackButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.function} activeOpacity={1}>
      <View style={[styles.horizontalItems, {backgroundColor: colours.black}]}>
        <Icon
          name="angle-left"
          size={30}
          color={colours.white}
          style={backButtonStyles.icon}
        />
        <Text style={backButtonStyles.text}>Back</Text>
      </View>
    </TouchableOpacity>
  );
}

const backButtonStyles = StyleSheet.create({
  icon: {
    paddingVertical: 11,
    paddingLeft: 20
  },
  text: {
    paddingLeft: 10,
    color: colours.white,
    fontSize: 20
  }
});
