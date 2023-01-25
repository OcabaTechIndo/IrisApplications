/* eslint-disable import/extensions */
import DataAPI from '../../data/dataAPI.js';
import '../templates/template-lingkungan.js';

const LingkunganPage = {
    async render() {
        return `
                <template-info-lingkungan></template-info-lingkungan>
            `;
      },

      async afterRender() {
        const dataEnvirontment = await DataAPI.getLingkungan();
        console.log(dataEnvirontment);
        const elementEnvirontment = document.querySelector('template-info-lingkungan');
        const listLingkungan = elementEnvirontment.lingkunganData;
        const { areaList } = listLingkungan;
        areaList.innerHTML = '';
        dataEnvirontment.Lingkungan.forEach((envi) => {
          areaList.innerHTML += `
          <div class="card text-left col-" id="containerCar" style="width: 18rem;">
          <div class="text-center divGambarArtikel">
              <img src="${envi.image}" class="img-fluid gambarLingkungan" alt="Gambar Lingkungan ${envi.image}">
          </div>
          <div class="card-body">
              <h5 class="card-title">${envi.title} </h5>
          </div>
          <a href="#/detail_lingkungan/${envi.id}" id="tombolBaca" class="btn btn-primary">Baca Info Lengkap</a>
      </div>
      </div>
  </div>
            `;
        });
      },
};

export default LingkunganPage;
