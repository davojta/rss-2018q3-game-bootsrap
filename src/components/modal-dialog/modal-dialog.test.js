import ModalDialog from './modal-dialog';


describe('ModalDialog', () => {
  it('draw template into the body', () => {
    ModalDialog.draw();
    const modalEl = document.querySelectorAll('body>#demoModal');
    // console.log('body', document.querySelectorAll('body')[0].innerHTML);

    expect(modalEl.length).toBe(1);
  });
});
