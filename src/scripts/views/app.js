import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (page === '/index.html' || '/') this.Elements();
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  Elements() {
    const heroContainer = document.querySelector('hero-container');
    const contactsContainer = document.querySelector('contacts-container');
    const contentLabel = document.querySelector('.content__label');
    const discountContainer = document.querySelector('discount-container');
    this.showElement(heroContainer);
    this.showElement(contactsContainer);
    this.showElement(contentLabel);
    this.showElement(discountContainer);
  }

  showElement(element) {
    element.classList.remove('hide');
  }
}

export default App;
