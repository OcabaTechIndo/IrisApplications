class FoodTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get elementDataFood() {
        return {
            innerFood: this.querySelector('#innerFood'),
        };
    }

    render() {
        this.innerHTML = `
        <div class="container text-center">
        <div class="row row-cols-3" id="innerFood">
          

        </div>
      </div>
        `;
    }
}

customElements.define('template-food-health', FoodTemplate);
