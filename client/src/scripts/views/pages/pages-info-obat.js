import DataAPI from '../../data/dataAPI';
// eslint-disable-next-line import/extensions
import '../templates/template-info-obat.js';

const ObatPage = {
    async render() {
      return `
              <obat-list></obat-list>
          `;
    },

    async afterRender() {
      const dataObat = await DataAPI.GET_obat();
      console.log(dataObat);
      const containerObat = document.querySelector('obat-list');
      containerObat.obatData = dataObat;
    },

  };

export default ObatPage;
