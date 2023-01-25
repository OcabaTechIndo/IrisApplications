/* eslint-disable import/extensions */
import DataAPI from '../../data/dataAPI';
import UrlParser from '../../routes/URL_parser';
import '../templates/template_detail_covid';

const DetailCovidPage = {
    async render() {
        return `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page"><a href="/#/covid19">Info Covid-19</a></li>
        <li class="breadcrumb-item active" aria-current="page">Detail Info Covid</li>
        </ol>
        </nav>
        <div id="drop_list" class="list_content d-flex container text-center">
        <div class="container row" id="areaCovid19"></div>
        </div>
        <div class="container">
                <covid-detail-element></covid-detail-element>
        </div>
            `;
      },

      async afterRender() {
        // tinggal ganti nanti ama API lingkungan
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url.id);
        const detailCovidData = await DataAPI.detailCovid(url.id);
        const covidDetailElement = document.querySelector('covid-detail-element');
        console.log(covidDetailElement);
        console.log(detailCovidData.Covid);
        const dataFixCovid = detailCovidData.Covid[0];

        covidDetailElement.detailCovid = dataFixCovid;
      },
};

export default DetailCovidPage;
