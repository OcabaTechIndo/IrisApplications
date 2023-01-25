import UrlParser from '../../routes/URL_parser';
import DataAPI from '../../data/dataAPI';
import templateDetailArtikel from '../templates/template_detail_artikel';

const detailArtikel = {
    async render() {
        return `
        <div class="nav-point">
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page"><a href="#/artikel">Info Artikel</a></li>
        <li class="breadcrumb-item active" aria-current="page">Detail Artikel</li>
        </ol>
        </nav>
        </div>
        <div class="container text-center" id="detailArtikel"></div>
            `;
      },

      // eslint-disable-next-line no-empty-function
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url);
        const artikel = await DataAPI.getArtikelById(url.id);
        const dataFix = artikel.Article[0];
        console.log(dataFix);
        const tampilkanDetailArtikel = document.querySelector('#detailArtikel');
        tampilkanDetailArtikel.innerHTML = templateDetailArtikel(dataFix);
      },
};

export default detailArtikel;
