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
import Header from '../../common/components/header';
import Box from '../../common/components/box';

import SpellNavProps from './navigation';
import styles from '../../common/styles';
import {kebabCaseConverter} from '../../common/functions';

const spells = require('../../common/spells');
const spellNames = Object.keys(spells);

type Props = SpellNavProps<'Spells'>;

function Spells(props: Props) {
  console.info(spellNames);
  spellNames.forEach((spellName) => {
    spells[spellName].displayName = kebabCaseConverter(spellName);
  });
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        <TextInput style={styles.textInput} />
        <ScrollView>
          <View style={{flex: 1}}>
            {spellNames.map((spell) => {
              return (
                <Box
                  text={spells[spell].displayName}
                  type={1}
                  style={{paddingVertical: 3}}
                  function={() => props.navigation.navigate('SpellDisplay')}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Spells;
