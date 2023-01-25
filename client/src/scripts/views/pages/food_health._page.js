/* eslint-disable import/extensions */
// import DataAPI from '../../data/dataAPI';
// import UrlParser from '../../routes/URL_parser';
import DataAPI from '../../data/dataAPI';
import '../templates/template_food_health';

const FoodHealthPage = {
    async render() {
        return `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Kesehatan Makanan</li>
        </ol>
        </nav>
                <template-food-health></template-food-health>
            `;
      },

      // eslint-disable-next-line no-empty-function
      async afterRender() {
        const elementFood = document.querySelector('template-food-health');
        const fixElement = elementFood.elementDataFood;
        const { innerFood } = fixElement;

        const dataFood = await DataAPI.getFoodHealth();
        dataFood.food.forEach((fod) => {
            innerFood.innerHTML += `

            <div class="card text-left col-" id="containerCar" style="width: 18rem;">
            <div class="text-center divGambarArtikel">
                <img src="${fod.image}" class="img-fluid gambarFood" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${fod.title} </h5>
            </div>
            <a href="#/detail_food_page/${fod.id}" id="tombolBaca" class="btn btn-primary">Baca Info Lengkap</a>
        </div>
        </div>
    </div>
            `;
        });
      },
};

export default FoodHealthPage;
