import React, {PureComponent, useState} from 'react';
import {ScrollView, View, TextInput, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';

import MainNavProps from '../navigation';
import * as actions from '../../redux/actions';
import {State} from '../../redux/reducer';
import {StoreDispatch} from '../../redux/store';
import * as stringFormat from '../../common/functions';
import spells from '../../common/spells';
import styles from '../../common/styles';
import Box from '../../common/components/box';
import Header from '../../common/components/header';

interface StateProps {
  spellNames: string[];
  allSpellNames: string[];
}

interface DispatchProps {
  changeSpellNames: (searchText: string) => void;
}

type Props = StateProps & DispatchProps & MainNavProps<'Tabs'>;

class Spells extends PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
  }

  // public componentDidMount() {
  //   this.props.navigation.addListener('blur', () => {
  //     this.props.changeSpellNames(stringFormat.hyphenToSpace(''));
  //   });
  // }

  public render() {
    this.props.spellNames.forEach((spellName) => {
      spells[spellName].displayName = stringFormat.kebabCaseConverter(
        spellName
      );
    });
    this.props.spellNames.sort((a, b) => (a < b ? -1 : 1));
    return (
      <>
        <Header title={this.props.route.name} />
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            onChangeText={(searchText: string) => {
              this.props.changeSpellNames(
                stringFormat.hyphenToSpace(searchText.toLowerCase())
              );
            }}
          />
          <ScrollView keyboardShouldPersistTaps={'always'}>
            <View style={{flex: 1}}>
              {this.props.spellNames.map((spell) => {
                return (
                  <Box
                    key={spells[spell].displayName}
                    text={
                      spells[spell].gif
                        ? spells[spell].displayName
                        : spells[spell].displayName + ' (no gif)'
                    }
                    type={1}
                    style={{paddingVertical: 3}}
                    function={() => {
                      this.props.navigation.navigate('SpellDisplay', {
                        spellName: spell,
                        spell: spells[spell]
                      });
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  spellNames: state.spellNames,
  allSpellNames: state.allSpellNames
});

const mapDispatchToProps = (dispatch: StoreDispatch): DispatchProps => ({
  changeSpellNames: (searchText: string) => {
    dispatch(actions.changeSpellNames(searchText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
