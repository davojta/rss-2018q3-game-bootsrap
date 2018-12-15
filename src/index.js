import 'regenerator-runtime/runtime';

import 'bootstrap';

import Header from './header/header';
import Nav from './navigation/nav';

import './index.css';
import ModalDialog from './modal-dialog/modal-dialog';


const startApp = () => {
    Nav.draw();
    Header.draw();
    ModalDialog.draw();

    

}

startApp();

