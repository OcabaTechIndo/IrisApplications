/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
class LoginUser extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get elementUserValidation() {
        return {
            elementButton: this.querySelector('#btn-submit-login'),
            emailElement: this.querySelector('#email'),
            passwordElement: this.querySelector('#password'),
        };
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Login User</li>
        </ol>
        </nav>
        <div class="login_container">
        <div hidden id="spinner"></div>
        <div class="alert alert-danger alert-user alert-validation-danger fs-6" role="alert" hidden>
            Invalid email or password !
            Email atau Password Kamu salah 
        </div> 
        <div class="alert alert-danger alert-user alert-validation-danger-value" role="alert" hidden>
        kamu belum memasukan pssword dan email
        </div>
        <div class="container text-center user-valid ">
    <div class="Grid-login justify-content-center">
        <div class="baners">
            <img class="logo_login" src="./logo/hero2.webp" alt="logo IRIS">
        </div> 
        <div class="loginForm">
        <div class="iris-login"> 
        <h1> Login | IRIS </h1>
        </div>
        <form class=" needs-validation validation-user">
            <div class="mb-3 text-start">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
            </div>
            <div class="mb-3 text-start">
                <label for="email" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="*********" required>
            </div>
            <div class="container">
            <div class="button_login row">
                <div class="col tombol_login">
                    <button id="btn-submit-login" class="btn btn-validation">Masuk</button>
                </div>
        </form>
                <div class="col tombol_login">
                    <a href="#/register_page" class="btn btn-validation">Daftar</a>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
        `;
    }
}

customElements.define('login-element', LoginUser);
