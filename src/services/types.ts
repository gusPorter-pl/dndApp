export interface Player {
   key: number;
   name: string;
   initiative: number; // Make this optional?
   initiativeModifier?: number; // This will not be optional, need to update
   colour: number; // This references the index in state.colours array
}