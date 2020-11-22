import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
  }
}
  
export class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}

export const readSave = readGameSaving;
export const writeSave = writeGameSaving;
