import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles';

interface Props {
  title: string;
}

export default function Header(props: Props) {
  return (
    <View style={[styles.centre, styles.header]}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}
