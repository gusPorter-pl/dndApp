import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colours from '../colours';
import styles from '../styles';

interface Props {
  function: () => void;
}

export function BackButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.function} activeOpacity={1}>
      <View style={[styles.horizontalItems, {backgroundColor: colours.black}]}>
        <Icon
          name="angle-left"
          size={30}
          color={colours.white}
          style={buttonStyles.iconLeft}
        />
        <Text style={buttonStyles.text}>Back</Text>
      </View>
    </TouchableOpacity>
  );
}

export function ChangeDescription(props: Props) {
  return (
    <TouchableOpacity onPress={props.function} activeOpacity={1}>
      <View style={[styles.horizontalItems, {backgroundColor: colours.black}]}>
        <Text style={buttonStyles.text}>Next Page</Text>
        <Icon
          name="angle-right"
          size={30}
          color={colours.white}
          style={buttonStyles.iconRight}
        />
      </View>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  iconLeft: {
    paddingVertical: 11,
    paddingLeft: 20
  },
  iconRight: {
    paddingVertical: 11,
    paddingRight: 20
  },
  text: {
    paddingHorizontal: 10,
    color: colours.white,
    fontSize: 20
  }
});
