import {Player} from '../services/types';

export const changeColour = (colour: number) => {
  return (colour + 1) % 2; // 0 becomes 1, and 1 becomes 0
};