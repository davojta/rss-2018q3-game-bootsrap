import 'regenerator-runtime/runtime';

import 'bootstrap';

import Header from './header/header';
import Nav from './navigation/nav';

import './index.css';


const startApp = () => {
    Header.draw();
    Nav.draw();
}

startApp();

