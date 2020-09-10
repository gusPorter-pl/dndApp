import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import Centre from './centre';

import colours from '../../resources/colours';

interface Props {
  text: string;
  colour?: string; // include this somehow  {props.colour && smth}
}

export default (props: Props) => {
  return (
    <Centre style={styles.header}>
      <Text style={[styles.headerText]}>{props.text}</Text>
    </Centre>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#ffffff'
  },
  header: {
    paddingTop: 5,
    paddingBottom: 12,
    backgroundColor: colours.backgroundColour,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 15
  }
});
