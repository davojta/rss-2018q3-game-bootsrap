import $ from 'jquery';

import template from './cast.template';


class Cast {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.innerHTML = template;

    $('#demoModal').modal({});
  }

  static empty() {
    $('#cast').empty();
  }

  static getPlayerCast() {
    Cast.draw();
    const currentCast = 'only_one_cast';

    return new Promise((resolve) => {
      $('#demoModal').on('hidden.bs.modal', () => {
        resolve(currentCast);
      });
    });
  }
}

export default Cast;
