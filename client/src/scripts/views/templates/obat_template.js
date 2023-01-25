class Obat extends HTMLElement {
    set ObatTemplate(obat) {
        this._ObatTemplate = obat;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="list_obat" class="list_container">
                <h3>Home > Artikel</h3>
                <img src="./logo/obat_heart.png" alt="">
                <p>Masih ragu cara memilih obat yang tepat? jangan khawatir, IRIS akan membantu kamu</p>
                <div id="searchObat" class"obatSearchContainer"></div>
                <div id="drop_list" class="list_content"></div>    
            </div>
        `;

        const obatListContainer = this.querySelector('#drop_list');
        obatListContainer.innerHTML = '';
        this._ObatTemplate.forEach((obat) => {
            obatListContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obat.background}</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">Baca</a>
                    </div>
                </div>
            `;
        });
    }
}

customElements.define('obat-list', Obat);
