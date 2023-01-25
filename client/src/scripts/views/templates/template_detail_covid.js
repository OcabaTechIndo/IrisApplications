class DetailCovid extends HTMLElement {
    set detailCovid(value) {
        this._detailCovid = value;
        this.render();
    }

    render() {
        this.innerHTML = `
<div class="Grid">
    <div class="detail-view ">
    <h5 class="card-title titlePage">${this._detailCovid.title}</h5>
        <img src="${this._detailCovid.image}" class="card-img-top" alt="Gamabar Covid type ${this._detailCovid.title}">        </div>
    <div class="">
        <div class="detail-view deskripsiView">
                <p class="card-text textView">${this._detailCovid.description}</p>
        </div>
</div>
        `;
    }
}

customElements.define('covid-detail-element', DetailCovid);
