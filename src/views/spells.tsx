import React, {useState} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Header from '../common/components/header';
import Box from '../common/components/box';

import MainNavProps from '../navigation';
import styles from '../common/styles';
import * as stringFormat from '../common/functions';
import spells from '../common/spells';
import {State} from '../redux/reducer';
import {StoreDispatch} from '../redux/store';
import * as actions from '../redux/actions';

interface StateProps {
  spellNames: string[];
  allSpellNames: string[];
}

interface DispatchProps {
  changeSpellNames: (searchText: string) => void;
}

type Props = StateProps & DispatchProps & MainNavProps<'Tabs'>;

function Spells(props: Props) {
  const [searchText, setSearchText] = useState('');
  props.spellNames.forEach((spellName) => {
    spells[spellName].displayName = stringFormat.kebabCaseConverter(spellName);
  });
  props.spellNames.sort((a, b) => (a < b ? -1 : 1));
  return (
    <>
      <Header title={props.route.name} />
      <View style={styles.body}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(searchText: string) => {
            setSearchText(searchText);
            props.changeSpellNames(
              stringFormat.hyphenToSpace(searchText.toLowerCase())
            );
          }}
        />
        <ScrollView>
          <View style={{flex: 1}}>
            {props.spellNames.map((spell) => {
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
