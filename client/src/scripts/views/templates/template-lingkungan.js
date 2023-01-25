/* eslint-disable max-len */
class Lingkungan extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    // eslint-disable-next-line class-methods-use-this
    get lingkunganData() {
        return {
            areaList: this.querySelector('#areaLingkungan')
        };
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Info Lingkungan</li>
        </ol>
        </nav>
        <div id="drop_list" class="list_content d-flex container text-center">
        <div class="container row" id="areaLingkungan"></div>
        </div>
        `;
    }
}

customElements.define('template-info-lingkungan', Lingkungan);
