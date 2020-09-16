import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Spell} from '../../common/types';

export type SpellParamList = {
  Spells: undefined;
  SpellDisplay: {spellName: string; spell: Spell};
};

type SpellNavProps<key extends keyof SpellParamList> = {
  navigation: StackNavigationProp<SpellParamList, key>;
  route: RouteProp<SpellParamList, key>;
};

export default SpellNavProps;
