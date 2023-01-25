class AnswerTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get dataValueAnswerElement() {
        return {
            containerElement: this.querySelector('#innerAnswer'),
        };
    }

    render() {
        this.innerHTML = `
        <div class="container px-4 p-5">
        <div hidden id="spinner"></div>
            <div class="text-center">
                <h2>Halman Semua Pertanyaan</h2>
            </div>
            <div class="p-5" id="innerAnswer">

            </div>
        </div>
        `;
    }
}

customElements.define('answer-element', AnswerTemplate);
