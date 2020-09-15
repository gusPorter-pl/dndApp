import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Header from '../common/components/header';

import PageNavProps from './navigation';
import styles from '../common/styles';

type Props = PageNavProps<'Spells'>;

function Spells(props: Props) {
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        <Text>Spells</Text>
      </View>
    </>
  );
}

export default Spells;
