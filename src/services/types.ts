export interface Player {
   key: number;
   name: string;
   initiative: number;
   initiativeModifier?: number; // This will not be optional, need to update
   colour?: string; // Optional for initialisation of null, change to state.colours[0]?
}