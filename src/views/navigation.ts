import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type PageParamList = {
  Home: undefined;
  Players: undefined;
  Initiative: undefined;
  Spells: undefined;
};

type PageNavProps<key extends keyof PageParamList> = {
  navigation: StackNavigationProp<PageParamList, key>;
  route: RouteProp<PageParamList, key>;
};

export default PageNavProps;
