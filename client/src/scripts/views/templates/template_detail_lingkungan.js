class DetailLingkungan extends HTMLElement {
    set detailLingkungan(value) {
        this._detailLingkungan = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="Grid">
        <div class="detail-view ">
        <h5 class="card-title titlePage">${this._detailLingkungan.title}</h5>
            <img src="${this._detailLingkungan.image}" class="card-img-top" alt="Gamabar Lingkungan ${this._detailLingkungan.title} "></div>
        <div class="">
            <div class="detail-view deskripsiView">
                    <p class="card-text textView">${this._detailLingkungan.description}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('lingkungan-detail-element', DetailLingkungan);
