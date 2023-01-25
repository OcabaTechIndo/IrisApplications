/* eslint-disable import/extensions */
// import DataAPI from '../../data/dataAPI';
import DataAPI from '../../data/dataAPI';
import '../templates/answer_template';

const AnswerPage = {
    async render() {
        return `
                <answer-element></answer-element>
            `;
      },

      async afterRender() {
        const getElementAnsw = document.querySelector('answer-element');
        const fixElement = getElementAnsw.dataValueAnswerElement;
        const { containerElement } = fixElement;
        const getAllAnswer = await DataAPI.getAnswer();

        const getAllCreate = () => {
            getAllAnswer.answer.forEach((answ) => {
                containerElement.innerHTML += `
                <div class="card mt-5">
                <div class="card-header">
                    ${answ.name}
                </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>${answ.description}</p>
                            <span class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></span>
                        </blockquote>
                    </div>
                </div>
                `;
            });
        };

        getAllCreate();
      },
};

export default AnswerPage;
