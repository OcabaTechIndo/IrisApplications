/* eslint-disable space-before-blocks */
class Obat extends HTMLElement {
    set obatData(value) {
        this._obatData = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="nav-point">
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Info Obat</li>
        </ol>
        </nav>
        </div>
            <div id="list_obat" class="list_container container">
                <div class="row" id="obat_card_list"></div>
                </div>
            </div>
        `;
        const elementListObat = this.querySelector('#obat_card_list');
        elementListObat.innerHTML = '';
        this._obatData.forEach((obat) => {
            elementListObat.innerHTML += `
            <div class="card text-left col-" id="containerCar" style="width: 18rem;">
                <div class="text-center divGambarObat">
                    <img src="${obat.image_drug}" class="img-fluid gambarObat" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center"><b>${obat.name_general}</b></h5>
                    <p class="card-text bgObat">${obat.summary.slice(0, 150)}</p>
                </div>
                <a href="#/detail_obat_page/${obat.id}" id="tombolBaca" class="btn btn-primary">Baca Info Lengkap</a>
            </div>
            `;
        });
    }
}

customElements.define('obat-list', Obat);
