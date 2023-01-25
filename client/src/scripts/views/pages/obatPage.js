import '../templates/obat_template';
import DataAPI from '../../data/dataAPI';

const ObatPage = {
    async render() {
        return `
              <obat-list></obat-list>
          `;
    },

    async afterRender() {
        const dataObat = DataAPI.GET_obat();
        console.log(dataObat);
        const containerObat = document.querySelector('obat-list');
        containerObat.ObatTemplate = dataObat;
    },

};

export default ObatPage;
