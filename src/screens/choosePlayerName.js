import $ from 'jquery';

import template from './choosePlayerName.template';
import { getGameState } from '../game';


class ChoosePlayerName {
    static draw() {
      const contentEl = document.querySelector('#content');
      contentEl.innerHTML = template;
    }
    static empty() {
        $('#choosePlayerName').empty();
    }
    constructor() {
        this.localPlayerName = '';
    }
    getNewPlayerName() {
        ChoosePlayerName.draw();
        return new Promise((resolve) => {
            $('#choosePlayerName .js-form').on('submit', (e) => {
                e.preventDefault();
    
                const playerName = $('#choosePlayerName .js-player-name').val();
                console.log('getNewPlayerName - playerName', playerName);
                
                ChoosePlayerName.empty();

                resolve(playerName);
            });
        });       
    }
  }

  export default ChoosePlayerName;