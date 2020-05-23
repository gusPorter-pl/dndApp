import { Player } from './types';
import AsyncStorage from '@react-native-community/async-storage';

export const getPlayers = async () => {
  try {
    const players = await AsyncStorage.getItem('players');
    if (players) {
      return JSON.parse(players);
    } else {
      return [];
    }
  } catch (error) {
    console.warn(error);
  }
};

export const savePlayers = async (players: Player[]) => {
  try {
    const jsonValue = JSON.stringify(players);
    await AsyncStorage.setItem('players', jsonValue);
  } catch (error) {
    console.warn(error);
  }
};