import React, {useState} from 'react';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import SpellNavProps from './navigation';
import colours from '../common/colours';
import spells from '../common/spells';
import styles from '../common/styles';
import BackButton from '../common/components/backButton';

type Props = SpellNavProps<'SpellDisplay'>;

function SpellDisplay(props: Props) {
  const [gifSelect, setGifSelect] = useState(true);
  const spell = props.route.params.spell;
  const spellName = props.route.params.spellName;
  return (
    <>
      <StatusBar backgroundColor={colours.black} />
      <BackButton
        function={() => {
          props.navigation.goBack();
        }}
      />
      <View style={[styles.body, {padding: 0}]}>
        {spell.gif && (
          <TouchableOpacity
            onPress={() => {
              setGifSelect(!gifSelect);
            }}
            activeOpacity={1}
          >
            {gifSelect && (
              <Image
                source={spells[spellName].image}
                style={spellDisplayStyles.gif}
              />
            )}
            {!gifSelect && (
              <Image
                source={spells[spellName].description}
                style={spellDisplayStyles.gif}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const spellDisplayStyles = StyleSheet.create({
  gif: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  }
});

export default SpellDisplay;
