import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PlayerAdd from './playerAdd';
import SpellDisplay from './spellDisplay';
import TabScreen from './tabs';
import {MainParamList} from './navigation';

const Stack = createStackNavigator<MainParamList>();

function StackScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={TabScreen} />
      <Stack.Screen name="SpellDisplay" component={SpellDisplay} />
      {/* <Stack.Screen name="InitiativeDisplay" component={InitiativeDisplay} /> */}
      <Stack.Screen name="PlayerAdd" component={PlayerAdd} />
    </Stack.Navigator>
  );
}

export default StackScreen;
