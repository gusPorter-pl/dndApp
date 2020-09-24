import React, {PureComponent} from 'react';
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

class SpellDisplay extends PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      gifSelect: true
    };
  }

  public render() {
    const spell = this.props.route.params.spell;
    const spellName = this.props.route.params.spellName;
    return (
      <>
        <StatusBar backgroundColor={colours.black} />
        <BackButton
          function={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={[styles.body, {padding: 0}]}>
          {spell.gif && (
            <TouchableOpacity
              onPress={() => {
                this.setState({gifSelect: !this.state.gifSelect});
              }}
              activeOpacity={1}
            >
              {this.state.gifSelect && (
                <Image
                  source={spells[spellName].image}
                  style={spellDisplayStyles.gif}
                />
              )}
              {!this.state.gifSelect && (
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
}

const spellDisplayStyles = StyleSheet.create({
  gif: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  }
});

export default SpellDisplay;
