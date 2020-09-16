import React from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import Header from '../common/components/header';
import Box from '../common/components/box';

import SpellNavProps from './navigation';
import MainNavProps from '../navigation';
import styles from '../common/styles';
import {kebabCaseConverter} from '../common/functions';
import spells from '../common/spells';

const spellNames = Object.keys(spells);

type Props = MainNavProps<'Tabs'>;

function Spells(props: Props) {
  spellNames.forEach((spellName) => {
    spells[spellName].displayName = kebabCaseConverter(spellName);
  });
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        <TextInput style={styles.textInput} placeholder="Search" />
        <ScrollView>
          <View style={{flex: 1}}>
            {spellNames.map((spell) => {
              return (
                <Box
                  key={spells[spell].displayName}
                  text={spells[spell].displayName}
                  type={1}
                  style={{paddingVertical: 3}}
                  function={() =>
                    props.navigation.navigate('SpellDisplay', {
                      spellName: spell,
                      spell: spells[spell]
                    })
                  }
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
