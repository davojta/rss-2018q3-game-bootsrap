import 'regenerator-runtime/runtime';
import 'bootstrap';
import $ from 'jquery';

import { GameState, setGameState } from './game'; 

import Header from './components/header/header';
import Nav from './components/navigation/nav';

import './index.css';
import ModalDialog from './components/modal-dialog/modal-dialog';
import ChoosePlayerName from './screens/choosePlayerName/choosePlayerName';


const startApp = () => {
    window.$ = $; // for debug

    const gameState = new GameState();
    window.gameState = gameState; // antipatter - need use carefully!
    setGameState(gameState);

    Nav.draw();
    Header.draw();
    ModalDialog.draw();

    $('.js-choose-player-name-nav').on('click', async (e) => {
        e.preventDefault();

        const nameChooser = new ChoosePlayerName();
        const playerName = await nameChooser.getNewPlayerName();

        console.log('playerName', playerName);
        gameState.playerName = playerName;

        Nav.update(gameState);
    })
}

startApp();

