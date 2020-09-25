import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InitiativeOrder from './initiativeOrder';
import PlayerAddEdit from './playerAddEdit';
import SpellDisplay from './spellDisplay';
import TabScreen from './tabs';
import {MainParamList} from './navigation';

const Stack = createStackNavigator<MainParamList>();

function StackScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={TabScreen} />
      <Stack.Screen name="SpellDisplay" component={SpellDisplay} />
      <Stack.Screen name="PlayerAddEdit" component={PlayerAddEdit} />
      <Stack.Screen name="InitiativeOrder" component={InitiativeOrder} />
    </Stack.Navigator>
  );
}

export default StackScreen;
