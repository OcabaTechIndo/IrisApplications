/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import '../templates/login_template';
import DataAPI from '../../data/dataAPI';

const userLogin = {
    async render() {
        return `
            <login-element></login-element>
        `;
    },

    async afterRender() {
        const elemntLoginUser = document.querySelector('login-element');
        const userElement = elemntLoginUser.elementUserValidation;

        const { elementButton, emailElement, passwordElement } = userElement;

        elementButton.addEventListener('click', async () => {
            const element = {
                email: emailElement.value,
                password: passwordElement.value,
            };
            const { email, password } = element;

            // eslint-disable-next-line eqeqeq
            if (email == '' || password == '') {
                const elementDangerValue = document.querySelector('.alert-validation-danger-value');
                setTimeout(() => {
                    elementDangerValue.setAttribute('hidden', '');
                }, 4500);
                elementDangerValue.removeAttribute('hidden');
                return;
            }

            const elementDangerValue = document.querySelector('.alert-validation-danger-value');
            elementDangerValue.setAttribute('hidden', '');

            // eslint-disable-next-line no-use-before-define
            userUpdata({
                email,
                password,
            });
        });

        const userUpdata = async ({
            email,
            password,
        }) => {
            const dataUser = {
                email,
                password,
            };

            const findTostring = JSON.stringify(dataUser);
            const dataApi = await DataAPI.userLogin(findTostring);
            // eslint-disable-next-line eqeqeq
            if (dataApi.success === 0) {
                const elementDanger = document.querySelector('.alert-validation-danger');
                const spin = document.querySelector('#spinner');
                spin.removeAttribute('hidden');
                setTimeout(() => {
                    spin.setAttribute('hidden', '');
                    elementDanger.removeAttribute('hidden');
                }, 2000);

                setTimeout(() => {
                    elementDanger.setAttribute('hidden', '');
                }, 5000);
            } else {
                const API = dataApi.token;
                const userAccessToken = dataApi.user;
                localStorage.setItem('userAccessToken', JSON.stringify(userAccessToken));
                localStorage.setItem('tokenAPI', JSON.stringify(API));

                const spin = document.querySelector('#spinner');
                spin.removeAttribute('hidden');
                setTimeout(() => {
                    spin.setAttribute('hidden', '');
                    window.location.href = '#/home';
                    const elementNav = document.querySelector('.btn-loginValidation');
                    elementNav.setAttribute('hidden', '');
                }, 3000);
            }
        };
    },
};

export default userLogin;
