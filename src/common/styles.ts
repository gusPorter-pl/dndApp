import {StyleSheet} from 'react-native';
import colours from './colours';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colours.header,
    paddingVertical: 10
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '100'
  },
  background: {
    backgroundColor: colours.background,
    flex: 1,
    padding: 5,
    paddingTop: 15
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlapView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlapText: {
    color: '#000',
    fontSize: 22
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    height: '100%',
    flex: 1,
    padding: 30,
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
  setSize: {
    width: 30
  },
  textInput: {
    marginVertical: 5,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1
  }
});

export default styles;
