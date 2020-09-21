import React from 'react';
import {View, Image, StatusBar} from 'react-native';

import SpellNavProps from './navigation';
import spells from '../common/spells';
import styles from '../common/styles';

type Props = SpellNavProps<'SpellDisplay'>;

function SpellDisplay(props: Props) {
  const spell = props.route.params.spell;
  const spellName = props.route.params.spellName;
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
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
