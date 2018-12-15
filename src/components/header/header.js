import template from './header.template';
import './header.css';

class Header {
  static draw() {
    const contentEl = document.querySelector('#content');
    contentEl.insertAdjacentHTML('beforeend', template);
  }
}

export default Header;
