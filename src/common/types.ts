export interface Player {
  name: string;
  initiative?: number; // Make this optional?
  initiativeModifier?: number; // This will not be optional, need to update
  reaction: boolean; // Replaced colour
  // colour: number; // This references the index in state.colours array
  characterType: 'PC' | 'NPC';
  // legendaryActions?: number;
}

export interface Spell {
  level: number;
  gif: boolean;
  ifNotGif?: Object;
  displayName?: string;
}
