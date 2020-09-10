import React, {PureComponent} from 'react';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import playerStore from './store/players';
import Initiative from './views/initiative';
import colours from './resources/colours';

const emptyBox = require('./resources/assets/empty.jpg');

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const pages = ['Players', 'Initiative'];
  return (
    <View style={{backgroundColor: '#dcdddf', flex: 1}}>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        {pages.map((page) => {
          return (
            <View style={{marginTop: 5}} key={page}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(page);
                }}
                activeOpacity={0.7}
              >
                <View style={styles.container}>
                  <Image
                    source={emptyBox}
                    style={{width: 250, height: 60, resizeMode: 'stretch'}}
                  />
                  <View style={styles.overlapView}>
                    <Text style={styles.overlapText}>{page}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1
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
  }
});

export default class App extends PureComponent {
  public constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <Provider store={playerStore}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colours.backgroundColour}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                ...options,
                headerTitleStyle: {
                  ...options.headerTitleStyle,
                  textAlign: 'center'
                }
              }}
            />
            <Stack.Screen
              name="Initiative"
              component={Initiative}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const options = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: colours.backgroundColour
  },
  headerTitleStyle: {
    fontSize: 25,
    fontWeight: '100',
    flex: 1
  }
};
