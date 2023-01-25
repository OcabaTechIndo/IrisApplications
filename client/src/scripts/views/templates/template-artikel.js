class Artikel extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    set artikelSehat(value) {
        this._artikelSehat = value;
    }

    get elementListArticle() {
        return this.querySelector('#areaArtikel');
    }

    render() {
        this.innerHTML = `
        <div id="drop_list" class="list_content d-flex text-center">
        <div class="row" id="areaArtikel"></div>
        </div>
        `;
    }
}

customElements.define('artikel-page', Artikel);
