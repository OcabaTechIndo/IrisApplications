import routes from '../routes/routes';
import UrlParser from '../routes/URL_parser';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    // eslint-disable-next-line no-underscore-dangle
    this._content.innerHTML = await page.render();
    await page.afterRender();
    // const skipLinkElem = document.querySelector('.skip_link');
    // skipLinkElem.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.querySelector('#mainContent').focus();
    // });
  }
}

export default App;
