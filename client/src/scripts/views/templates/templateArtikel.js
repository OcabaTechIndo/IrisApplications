// class Artikel extends HTMLElement {
//     set artikelSehat(sehat) {
//         this._artikelSehat = sehat;
//         this.render();
//     }

//     render() {
//         this.innerHTML = `
//         <div id="list_artikel" class="list_container">
//             <h3>Home > Artikel</h3>
//             <div id="drop_list" class="list_content"></div>
//         </div>
//         `;

//         const artikelContainer = this.querySelector('#drop_list');
//         artikelContainer.innerHTML = '';
//         this._artikelSehat.forEach(artikel => {
//             artikelContainer.innerHTML += `
//             <div class="card" style="width: 18rem;">
//             <img src="" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title"></h5>
//                     <p class="card-text"></p>
//                     <a href="#" class="btn btn-primary">Baca</a>
//                 </div>
//             </div>
//             `;
//         });
//     }
// }

// customElements.define('artikel-container', Artikel);



















// <!-- <div class="jumbotron">
// <h1 class="display-4">SEHAT YUKS</h1>
// <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//   Yuks cari tahu Info kesehatan disini</p>
// <hr class="my-4">
// <p clas>Gaskeun jaga kesehatan</p>
// <a href="#" class="btn btn-primary btn-lg">Join Now</a>
// </div> -->

// <!--Slider-->
// <!-- <div class="container">
// <div id="carouselExampleIndicators" class="carousel slide slider-area" data-bs-ride="true">
//   <h1 class="artikel-rekomendasi">Rekomendasi Artikel</h1>
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
//       aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
//       aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
//       aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="../picDummy/slider1.webp" class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h1 class="display-4">SEHAT YUKS</h1>
//         <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//           Yuks cari tahu Info kesehatan disini</p>
//         <hr class="my-4">
//         <p clas>Gaskeun jaga kesehatan</p>
//         <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="../picDummy/slider2.webp" class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h1 class="display-4">SEHAT YUKS</h1>
//         <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//           Yuks cari tahu Info kesehatan disini</p>
//         <hr class="my-4">
//         <p clas>Gaskeun jaga kesehatan</p>
//         <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="../picDummy/slider3.jpeg" class="d-block w-100" alt="...">
//       <div class="carousel-caption d-none d-md-block">
//         <h1 class="display-4">SEHAT YUKS</h1>
//         <p class="lead">Selain diri kamu, IRIS juga perduli kesehatan kamu lho,
//           Yuks cari tahu Info kesehatan disini</p>
//         <hr class="my-4">
//         <p clas>Gaskeun jaga kesehatan</p>
//         <a href="#" class="btn btn-primary btn-lg">Baca Artikel</a>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
//     data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// </div> -->

// <!--Rekomendasi obat-0batan -->
// <!-- <div class="container">
// <h1 class="header-obat">Rekomdesi obat yang mungkin kamu butuhkan</h1>
// <div id="hasil" class="listObat">
//   <div tabindex="0" class="katalog">
//     <div class="detailObats">
//       <h3 class="namaObat">Nama Obat</h3>
//       <img class="fotoObats" src="../picDummy/obat.webp" alt="Gambar obat .." />
//       <p class="rating"><b>❤️</b></p>
//       <p class="keterangan">Rp.***.***</p>
//     </div>
//     <button class="beli-obat">Beli</button>
//   </div> -->

//   <!-- <div tabindex="0" class="katalog">
//     <div class="detailObats">
//       <h3 class="namaObat">Nama Obat</h3>
//       <img class="fotoObats" src="../picDummy/obat.webp" alt="Gambar obat .." />
//       <p class="rating"><b>❤️</b></p>
//       <p class="keterangan">Rp.*****S</p>
//     </div>
//     <button class="beli-obat">Beli</button>
//   </div> -->


//   <!-- <div tabindex="0" class="katalog">
//     <div class="detailObats">
//       <h3 class="namaObat">Nama Obat</h3>
//       <img class="fotoObats" src="../picDummy/obat.webp" alt="Gambar obat .." />
//       <p class="rating"><b>❤️</b></p>
//       <p class="keterangan">Rp.***.***</p>
//     </div>
//     <button class="beli-obat">Beli</button>
//   </div> -->

//   <!--Area div obat content-->
// <!-- </div>
// </div> -->

// <!--Informasi Kesehatan-->
// <!-- <div class="container">
// <h1 class="header-obat">Informasi Kesehatan</h1>
// <div id="hasil-info" class="list-info">
//   <div tabindex="0" class="katalog-info">
//     <div class="detail-info">
//       <img class="foto-info" src="../picDummy/green.webp" alt="Gambar obat .." />
//       <h3 class="nama-info">Lingkungan</h3>
//     </div>
//   </div>

//   <div tabindex="0" class="katalog-info">
//     <div class="detail-info">
//       <img class="foto-info" src="../picDummy/green.webp" alt="Gambar obat .." />
//       <h3 class="nama-info">Lingkungan</h3>
//     </div>
//   </div>

//   <div tabindex="0" class="katalog-info">
//     <div class="detail-info">
//       <img class="foto-info" src="../picDummy/green.webp" alt="Gambar obat .." />
//       <h3 class="nama-info">Lingkungan</h3>
//     </div>
//   </div>

// </div>
// </div> -->