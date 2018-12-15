import template from './nav.template';
import './nav.css';

class Header {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterbegin', template);
  }
}

export default Header;
