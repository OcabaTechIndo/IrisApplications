/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
// import DataAPI from '../../data/dataAPI';
import DataAPI from '../../data/dataAPI';
import '../templates/template_register';

const RegisterPage = {
    async render() {
        return `
                <register-element></register-element>
            `;
      },

      // eslint-disable-next-line no-empty-function
      async afterRender() {
        const element = document.querySelector('register-element');
        const userRegistValue = element.dataValueRegister;
        console.log(userRegistValue);
        const {
            firstName,
            lastName,
            email,
            password,
            form,
            gender,
            phone,
        } = userRegistValue;

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const userDataFix = {
                firstName: firstName.value,
                lastName: lastName.value,
                gender: gender.value,
                email: email.value,
                password: password.value,
                number: phone.value,
            };

            // eslint-disable-next-line eqeqeq
            if (userDataFix.firstName == '' || userDataFix.lastName == '' || userDataFix.gender == '' || userDataFix.email == '' || userDataFix.password == '' || userDataFix.number == '') {
                const elementDangerValue = document.querySelector('.alert-validation-danger-value');
                setTimeout(() => {
                    elementDangerValue.setAttribute('hidden', '');
                }, 5500);
                elementDangerValue.removeAttribute('hidden');
                return;
            }

            const elementDangerValue = document.querySelector('.alert-validation-danger-value');
            elementDangerValue.setAttribute('hidden', '');

            const toJson = JSON.stringify(userDataFix);
            const dataUserRegister = await DataAPI.registerUser(toJson);

            // eslint-disable-next-line no-use-before-define
            userInisialisaiData(dataUserRegister);
        });

       const userInisialisaiData = (dataUserRegister) => {
            if (dataUserRegister.success === 'Data Berhasil Di tambahkan') {
                const spin = document.querySelector('#spinner');
                spin.removeAttribute('hidden');
                setTimeout(() => {
                    spin.setAttribute('hidden', '');
                    window.location.href = '#/login';
                }, 2000);
            } else {
                const elementDangerValue = document.querySelector('.alert-validation-danger-value');
                setTimeout(() => {
                    elementDangerValue.setAttribute('hidden', '');
                }, 5500);
                elementDangerValue.removeAttribute('hidden');
            }
       };
      },
};

export default RegisterPage;
