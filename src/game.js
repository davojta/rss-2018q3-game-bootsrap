export class GameState {
  constructor() {
    this.playerName = '';
  }

  setPlayerName(name = '') {
    this.playerName = name;
  }
}

let gameState = null;

export const setGameState = (state) => {
  gameState = state;
};

export const getGameState = () => gameState;
