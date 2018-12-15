import Nav from './nav';


describe('Nav', () => {
  it('draw template into the body', () => {
    Nav.draw();
    const navTag = document.querySelectorAll('body>nav');
    // console.log('body', document.querySelectorAll('body')[0].innerHTML);

    expect(navTag.length).toBe(1);
  });
});
