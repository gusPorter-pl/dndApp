import {StyleSheet} from 'react-native';
import colours from './colours';

const styles = StyleSheet.create({
  centre: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    height: '100%',
    flex: 1,
    padding: 20,
    backgroundColor: colours.background,
    justifyContent: 'center'
  },
  innerBody: {
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    backgroundColor: colours.white,
    marginVertical: 5,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1
  }
});

export default styles;
