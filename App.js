import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const App = () => {

  let players = [
    {name: "Bizzie", initiative: 20, colour: "#cf0000"},
    {name: "Xaylor", initiative: 14, colour: "#00cf00"},
    {name: "Salrakir", initiative: 22, colour: "#00cf00"},
    {name: "Mrtlvnjr", initiative: 8, colour: "#00cf00"},
    {name: "Pop Princess", initiative: 17, colour: "#00cf00"}
  ];
  players.sort((a, b) => b.initiative - a.initiative);


  return (
    <View style={{ height: '100%' }}>
      <View style={[styles.centre, styles.header]}>
        <Text style={[styles.headerText]}>Initiative Tracker</Text>
      </View>
      <View style={[styles.body]}>
        {players.map((player) => {
          return (
            <View style={[styles.innerBody]}>
              <View style={{flex: 3, paddingRight: 5, justifyContent: 'center'}}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.centre, { fontSize: 18 }]}>
                  {player.name}
                </Text>
              </View>
              <View style={{flex: 2}}>
                <Button title="REACTION" color={player.colour} />
              </View>
              <View style={{justifyContent: 'center', paddingLeft: 5}}>
                <Text style={[styles.setSize, { fontSize: 18, textAlign: 'right', alignItems: 'center'}]}>{player.initiative}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  // FLEYDIRE WATERS FREEZING OVER???
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    color: '#ffffff'
  },
  header: {
    padding: 13,
    backgroundColor: '#1155BB'
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    padding: 30,
    backgroundColor: "#f2f2f2",
    justifyContent: 'center',
    flex: 1
  },
  innerBody: {
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setSize: {
    minWidth: 20,
    maxWidth: 20
  }
});

export default App;
