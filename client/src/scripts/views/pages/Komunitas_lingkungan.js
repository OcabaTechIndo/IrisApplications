/* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-useless-return */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable semi */
// /* eslint-disable no-use-before-define */
// /* eslint-disable space-before-blocks */
// // import DataAPI from '../../data/dataAPI';
// // eslint-disable-next-line import/extensions
import DataAPI from '../../data/dataAPI';
import '../templates/page_komunitas_lingkungan';

// /* eslint-disable no-empty-function */
const KomunitasLingkunganPage = {
    async render() {
        return `
            <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Komunitas Lingkungan</li>
                </ol>
            </nav>
            <div class="alert alert-danger alert-user alert-validation-danger fs-6" role="alert" hidden>
            Invalid email or password !
            Email atau Password Kamu salah 
        </div> 
        <div class="alert alert-danger alert-user alert-validation-danger-value" role="alert" hidden>
        kamu belum memasukan pssword dan email
        </div>
        <div class="container text-center user-valid ">
                    <komunitas-lingkungan-element>
                    </komunitas-lingkungan-element>
            `;
    },

    async afterRender() {
        const elementGetValue = document.querySelector('komunitas-lingkungan-element');
        const elementFixValueValid = elementGetValue.dataValueAnswer;

        const { answerElement, buttonAnswerElement } = elementFixValueValid;
        const data = {
            initiality: {
                answerElement,
                buttonAnswerElement,
            },
        };
        data.initiality.buttonAnswerElement.addEventListener('click', async () => {
            const dataFixUserCreate = data.initiality.answerElement;
            const tokenUser = JSON.parse(localStorage.getItem('tokenAPI'));
            const usernameData = JSON.parse(localStorage.getItem('userAccessToken'));
            if (usernameData == null) {
                console.log('Anda Belum Daftar');
                window.location.href = '#/login';
                return;
            }
            const { id } = usernameData;

            const datauser = await DataAPI.getUserById(id, tokenUser);

            if (datauser.success === 'data di temukan') {
                const { firstName } = datauser.data;
                const userData = {
                    name: firstName,
                    description: dataFixUserCreate.value,
                };

                if (userData.description == '') {
                    return;
                }
                const userFix = JSON.stringify(userData);
                const dataCreate = await DataAPI.createAnswer(userFix);
                if (dataCreate.status === 'success') {
                    const spin = document.querySelector('#spinner');
                    spin.removeAttribute('hidden');
                    setTimeout(async () => {
                        spin.setAttribute('hidden', '');
                        window.location.href = '#/answer_view';
                    }, 3000);
                } else {
                    console.log('error');
                    return;
                }
                // eslint-disable-next-line no-unused-vars
            } else {
                const spin = document.querySelector('#spinner');
                spin.removeAttribute('hidden');
                setTimeout(async () => {
                    spin.setAttribute('hidden', '');
                    window.location.href = '#/login';
                }, 3000);
                return;
            }
        });
    },
};

export default KomunitasLingkunganPage;
