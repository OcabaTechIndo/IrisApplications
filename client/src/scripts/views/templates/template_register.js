class RegistUserTemplate extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    get dataValueRegister() {
        return {
            firstName: this.querySelector('#first_name'),
            lastName: this.querySelector('#last_name'),
            email: this.querySelector('#email'),
            password: this.querySelector('#password'),
            form: this.querySelector('form'),
            gender: this.querySelector('#gender'),
            phone: this.querySelector('#phone'),
        };
    }

    render() {
        this.innerHTML = `
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">User Register</li>
        </ol>
        </nav>
        <div id="app">
        <section class="section">
          <div class="container mt-5">
          <div hidden id="spinner"></div>
          <div class="alert alert-danger alert-user alert-validation-danger fs-6" role="alert" hidden>
          Invalid email or password !
          Email atau Password Kamu salah </div> 
          <div class="alert alert-danger alert-user alert-validation-danger-value" role="alert" hidden>
            Maukan Semua data yang kosong
          </div>
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
    
                <div class="card card-primary">
                  <div class="card-header"><h4>Register</h4></div>
    
                  <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="first_name">First Name</label>
                          <input id="first_name" type="text" class="form-control" autofocus>
                        </div>
                        <div class="form-group col-6">
                          <label for="last_name">Last Name</label>
                          <input id="last_name" type="text" class="form-control">
                        </div>
                      </div>
    
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="form-control">
                        <div class="invalid-feedback">
                        </div>
                      </div>
    
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="password" class="d-block">Password</label>
                          <input id="password" type="text" class="form-control pwstrength" data-indicator="pwindicator">
                          <div id="pwindicator" class="pwindicator">
                            <div class="bar"></div>
                            <div class="label"></div>
                          </div>
                        </div>
                        <div class="form-group col-6">
                          <label for="phone" class="d-block">Phone</label>
                          <input id="phone" type="text" class="form-control">
                        </div>
                      </div>   
                      <label>Gender</label>
                      <select class="form-control selectric" id="gender">
                        <option>Laki Laki</option>
                        <option>Perempuan</option>
                      </select> 
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-sm btn-block mt-3">
                          Buat Akun Yuks
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="simple-footer">
                  Copyright &copy; Stisla 2018
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        `;
    }
}

customElements.define('register-element', RegistUserTemplate);
