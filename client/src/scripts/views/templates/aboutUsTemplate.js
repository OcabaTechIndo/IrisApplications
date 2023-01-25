class AboutUs extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="">
        <nav class="petunjukHalaman" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">AboutUS</li>
        </ol>
        </nav>
        </div>
        <div class="detailIris">
            <h1>About IRIS</h1>
            <p> IRIS merupakan aplikasi berbasis web yang menyediakan berbagai informasi seputar dunia kesehatan. IRIS dibuat
                oleh 4 orang yang sudah berpengalaman membuat berbagai website.
                IRIS menyediakan 2 layanan informasi utama, yaitu artikel kesehatan dan info Obat. Artikel kesehatan ada berbagai jenis artikel, diantaranya: <br> <br>
                1 . Layanan kesehatan makanan. <br>
                Layanan ini memberikan informasi-informasi tentang makanan yang sehat dikonsumsi. Berbagai bahan pangan nabati dan hewani yang memberi banyak manfaat pada tubuh speerti vitamin dan mineral.
                Terdapat detail informasi kesehatan pada masing-masing makanan, detail-detail tersebut dibuat sedetail mungkin untuk memberikan informasi yang berguna. <br><br>
                2 . Layanan tentang COVID 19. <br>
                Layanan ini berisi informasi-informasi tentang virus COVID-19. Berbagai artikel seperti varian virus COVID-19, vaksinasi, dan gejala-penanganannya. Layanan ini berfungsi agar tidak ada lagi berita hoax yang tersebar luas dan dikonsumsi mentah-mentah. <br><br>
                3 . Layanan Latihan sehat. <br>
                Berisi cara-cara pelatihan pada tubuh untuk menjaga kesehatan jasmani dan rohani. <br><br>
                4 . Layanan kesehatan lingkungan. <br>
                Pada layanan ini berisi artikel-artikel untuk menjaga kesehatan lingkungan. Kesehatan lingkungan juga sangat diperlukan, karena lingkungan juga berperan untuk menjaga kesehatan tubuh manusia. Menjaga lingkungan juga tidak hanyak berguna bagi manusia, hewan dan tumbuhan juga merasakan manfaatnya.
                Maka dari itu IRIS menyediakan layanan ini karena berperan dalam menjaga kesehatan tubuh dan termasuk dunia kesehatan juga. <br><br>
                <br>
                IRIS tidak hanya memberikan layanan informasi seprti artikel-artikel diatas, IRIS juga menyediakan layanan informasi obat-obatan yang bisa berguna untuk kesehatan tubuh. IRIS juga menyedaiakan layanan untuk user bertanya, seperti layanan komunitas lingkungan.
                Komunitas lingkungan merupakan fitur untuk bertanya pada komunitas sehat. terdapat form untuk memasukkan pertanyaan . Form bisa diinput jika sudah login akun di IRIS.                
            </p>
            <br>
            <br>
            </div>
            <div class="kenalan_profile">
                <h2>Kenalan dengan para developers</h2>
            </div>
            <div id="profil_content" class="profil_container">
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="./foto profile/profile ilham.jpeg" alt="Foto Front End 1 Muhammad Ilham F">
                            <figcaption>Muhammad Ilham F</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>Muhammad Ilham Febriana</p>
                        <p>21 Tahun</p>
                        <p>Depok, Jawa Barat</p>
                        <p>Universitas Pertamina</p>
                        <p>Front End Developer</p>
                        <div class="link_profile">
                            <a href="https://github.com/Understrike123">GitHub</a>
                            <a>|</a> 
                            <a href="https://www.linkedin.com/in/muhammad-ilham-febriana-4234a21a4/">linkedin</a>
                        </div>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="./foto profile/profile Ihrat.jpg" alt="Foto Fulsstack 1 Ihrat Pramudya">
                            <figcaption>Ihrat Pramudya</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>Ihrat Pramudya</p>
                        <p>20 Tahun</p>
                        <p>Jayapura, Papua</p>
                        <p>Universitas Bina Sarana Informatika</p>
                        <p>Full Stack Developer</p>
                        <div class="link_profile">
                            <a href="https://github.com/IhratPramudya">GitHub</a>
                            <a>|</a> 
                            <a href="https://www.linkedin.com/in/ihrat-pramudya-a4bb611a4">linkedin</a>
                        </div>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="./foto profile/profile Rizal.jpg" alt="Foto Front End rizal">
                            <figcaption>Rizal Suryana</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>Rizal Suryana</p>
                        <p>22 Tahun</p>
                        <p>Tasikmalaya, Jawa barat</p>
                        <p>Pertamina University</p>
                        <p>Front End Developer</p>
                        <div class="link_profile">
                            <a href="https://github.com/rizalsuryana">GitHub</a>
                            <a>|</a>    
                            <a href="https://www.linkedin.com/in/rizalsuryana/">LinkedIn</a>    
                        </div>
                    </div>
                </div>
                <div class="profil_card">
                    <div class="profil_head">
                        <figure>
                            <img src="./foto profile/profile Susija.jpg" alt="Foto Back End 1 Susija">
                            <figcaption>Susija Meidiana</figcaption>
                        </figure>
                        <hr>
                    </div>
                    <div class="profil_body">
                        <p>Susija Meidiana</p>
                        <p>20 Tahun</p>
                        <p>Semarang, Jawa Tengah</p>
                        <p>Universitas Dian Nuswantoro</p>
                        <p>Back End Developer</p>
                        <div class="link_profile">
                            <a href="https://github.com/susija">GitHub</a>
                            <a>|</a> 
                            <a href="http://www.linkedin.com/in/susija-meidiana">linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('about-us', AboutUs);
