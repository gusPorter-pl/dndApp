import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Spell} from '../common/types';

export type MainParamList = {
  Tabs: undefined;
  SpellDisplay: {spellName: string; spell: Spell};
};

type MainNavProps<key extends keyof MainParamList> = {
  navigation: StackNavigationProp<MainParamList, key>;
  route: RouteProp<MainParamList, key>;
};

export default MainNavProps;
