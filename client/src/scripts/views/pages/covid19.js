import DataAPI from '../../data/dataAPI';
// eslint-disable-next-line import/extensions
import '../templates/template-covid-19.js';

/* eslint-disable no-empty-function */
const Covid19Page = {
  async render() {
    return `
            <info-covid19></info-covid19>
            `;
  },

  async afterRender() {
    const dataCovid19 = await DataAPI.getCovid();
    const dataFixCovid = dataCovid19.Covid;
    const containerCovid19 = document.querySelector('info-covid19');
    containerCovid19.covidData = dataFixCovid;
  },
};

export default Covid19Page;
