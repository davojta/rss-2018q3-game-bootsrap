import headerTemplate from './nav.html';
import './nav.css';

class Header {
  static draw() {
    const headerHTML = document.createElement('section');
    headerHTML.className = 'app-navigation';
    headerHTML.innerHTML = headerTemplate;
    document.body.appendChild(headerHTML);
  }
}

export default Header;
