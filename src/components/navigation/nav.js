import $ from 'jquery';

import template from './nav.template';
import './nav.css';

class Header {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterbegin', template);
  }

  static update(gameState) {
    $('.js-show-player-name').text(gameState.playerName);
  }
}

export default Header;
