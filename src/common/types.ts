export interface Player {
  name: string;
  initiative?: number;
  initiativeModifier: number;
  reaction: boolean;
  characterType: 'PC' | 'NPC';
  // legendaryActions?: number;
}

export interface Spell {
  level: number;
  gif: boolean;
  ifNotGif?: Object;
  displayName?: string;
}
