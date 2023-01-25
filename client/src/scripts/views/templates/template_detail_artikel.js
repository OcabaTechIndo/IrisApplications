const templateDetailArtikel = (ar) => `\
<div class="Grid">
<div class="detail-view gambarArtikel">
        <h5 class="card-title titlePage">${ar.title}</h5>
        <img src="${ar.image}" class="card-img-top" alt="Gamabar Artikel ${ar.title}">
</div>
<div class="detail-view deskripsiView">
<p class="card-text textView">${ar.description}</p>
</div>
</div>
`;

export default templateDetailArtikel;
