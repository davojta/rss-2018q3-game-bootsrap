import template from './modal-dialog.template';
import './modal-dialog.css';

class ModalDialog {
  static draw() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('beforeend', template);
  }
}

export default ModalDialog;
