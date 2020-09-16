import React from 'react';
import {ScrollView, View, Text, Image, StatusBar} from 'react-native';

import SpellNavProps from './navigation';
import styles from '../../common/styles';
import spells from '../../common/spells';
import {Spell} from '../../common/types';
import Header from '../../common/components/header';

type Props = SpellNavProps<'SpellDisplay'>;

function SpellDisplay(props: Props) {
  const spell = props.route.params.spell;
  const spellName = props.route.params.spellName;
  console.info(spells[spellName]);
  // let spellGif;
  // if (spell.gif) {
  //   const filename =
  //     '../../resources/spell-gifs/' +
  //     spell.level +
  //     '/' +
  //     props.route.params.spellName;
  //   console.log(filename);
  //   const spellGif = require(filename);
  // }
  return (
    <>
      {/* <Header title={spell.displayName} /> */}
      <StatusBar hidden={true} />
      <View style={[styles.body, {padding: 0}]}>
        {spell.gif && (
          <Image
            source={spells[spellName].image}
            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
          />
        )}
      </View>
    </>
  );
}

export default SpellDisplay;
