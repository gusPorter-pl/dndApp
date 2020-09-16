import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Spells from './spells';
import SpellDisplay from './spellDisplay';
import {SpellParamList} from './navigation';

const SpellStack = createStackNavigator<SpellParamList>();

function SpellStackScreen() {
  return (
    <SpellStack.Navigator initialRouteName="Spells" headerMode="none">
      <SpellStack.Screen name="Spells" component={Spells} />
      <SpellStack.Screen name="SpellDisplay" component={SpellDisplay} />
    </SpellStack.Navigator>
  );
}

export default SpellStackScreen;
