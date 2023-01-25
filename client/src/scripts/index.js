/* eslint-disable import/no-unresolved */
/* eslint-disable no-mixed-operators */
/* eslint-disable import/no-duplicates */
// Import our custom CSS
import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../scss/styles.scss';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/style-carousel.css';
import '../styles/baner.css';
import '../styles/footer.css';
import 'bootstrap';
import swRegister from './utils/sw_register';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
