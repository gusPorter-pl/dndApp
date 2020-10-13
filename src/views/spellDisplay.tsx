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
import {BackButton, ChangeDescription} from '../common/components/buttons';

type LocalState = {
  gifSelect: boolean;
  descriptionImages: number[];
  multipleDescriptions: boolean;
  descriptionChoice: number;
};

type Props = SpellNavProps<'SpellDisplay'>;

class SpellDisplay extends PureComponent<Props, LocalState> {
  public constructor(props: Props) {
    super(props);
    const spellName = this.props.route.params.spellName;
    this.state = {
      gifSelect: true,
      descriptionImages: spells[spellName].description,
      multipleDescriptions: spells[spellName].description.length > 1,
      descriptionChoice: 0
    };
  }

  public render() {
    const spellName = this.props.route.params.spellName;
    const spell = this.props.route.params.spell;
    return (
      <>
        <StatusBar backgroundColor={colours.black} />
        <View
          style={[
            styles.horizontalItems,
            {backgroundColor: colours.black, justifyContent: 'space-between'}
          ]}
        >
          <BackButton
            function={() => {
              this.props.navigation.goBack();
            }}
          />
          {this.state.multipleDescriptions && !this.state.gifSelect && (
            <ChangeDescription
              function={() => {
                this.setState({
                  descriptionChoice: (this.state.descriptionChoice + 1) % 2
                });
              }}
            />
          )}
        </View>
        <View style={[styles.body, {padding: 0, flex: 1}]}>
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
                  source={
                    this.state.descriptionImages[this.state.descriptionChoice]
                  }
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
