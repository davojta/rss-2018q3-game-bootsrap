export class GameState {
    constructor() {
        this.playerName = '';
    }
}

let gameState = null;

export const setGameState = (state) => {
    gameState = state;
}

export const getGameState = () => {
    return gameState;
}
