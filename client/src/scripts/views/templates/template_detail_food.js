class DetailFood extends HTMLElement {
    set detailFood(value) {
        this._detailFood = value;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="Grid">
        <div class="detail-view ">
        <h5 class="card-title titlePage">${this._detailFood.title}</h5>
            <img src="${this._detailFood.image}" class="card-img-top" alt="Gamabar Makanan  ${this._detailFood.title}"></div>
        <div class="">
            <div class="detail-view deskripsiView">
                    <p class="card-text textView">${this._detailFood.brief_description}</p>
                    <p class="card-text textView">${this._detailFood.description}</p>
            </div>
        </div>
        `;
    }
}

customElements.define('food-detail-element', DetailFood);
