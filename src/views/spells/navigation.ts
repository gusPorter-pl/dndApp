import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type SpellParamList = {
  Spells: undefined;
  SpellDisplay: undefined;
};

type SpellNavProps<key extends keyof SpellParamList> = {
  navigation: StackNavigationProp<SpellParamList, key>;
  route: RouteProp<SpellParamList, key>;
};

export default SpellNavProps;
