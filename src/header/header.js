import headerTemplate from './header.html';
import './header.css';

class Header {
  static draw() {
    const headerHTML = document.createElement('section');
    headerHTML.className = 'header';
    headerHTML.innerHTML = headerTemplate;
    document.body.appendChild(headerHTML);
  }
}

export default Header;
