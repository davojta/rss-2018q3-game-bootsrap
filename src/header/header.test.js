import Header from './header';


describe('Header', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="container" id="content"></div>
        `;
  });
  it('draw template into the body', () => {
    Header.draw();
    const headerTag = document.querySelectorAll('body>#content>header');
    // console.log('body', document.querySelectorAll('body')[0].innerHTML);

    expect(headerTag.length).toBe(1);
  });
});
