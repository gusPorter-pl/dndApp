import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colours from '../../resources/colours';

interface Props {
  text: string;
  colour?: string; // include this somehow  {props.colour && smth}
}

export default function Header(props: Props) {
  return (
    <View style={[styles.centre, styles.header]}>
      <Text style={[styles.headerText]}>{props.text}</Text>
    </View>
  );
}

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
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
