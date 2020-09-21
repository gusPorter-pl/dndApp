import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colours from '../colours';
import styles from '../styles';

interface Props {
  title: string;
}

export default function Header(props: Props) {
  return (
    <View style={[styles.centre, headerStyles.container]}>
      <Text style={headerStyles.text}>{props.title}</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colours.header,
    paddingVertical: 10
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '100'
  }
});
