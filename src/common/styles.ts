import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#dcdddf',
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
    color: 'black',
    fontSize: 22
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    padding: 30,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    flex: 1
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
  }
});

export default styles;
