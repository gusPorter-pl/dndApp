import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
}

const Centre: React.FC<Props> = ({children}, props: Props) => {
  return <View style={[styles.centre, props.style]}>{children}</View>;
};

const styles = StyleSheet.create({
  centre: {
    alignItems: 'center'
  }
});

export default Centre;
