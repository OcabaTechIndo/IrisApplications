const templateDetailObat = (obat) => `
<div class="Grid">
<div class="detail-view gambarObat">
        <h5 class="card-title titlePage">${obat.name_general}</h5>
        <img src="${obat.image_drug}" class="card-img-top" alt="Gamabar Obat ${obat.name_general}">
</div>
<div class="kanan">
        <div class="detail-view deskripsiView">
        <p class="card-text textView">${obat.summary}</p>
        <p class="card-text">${obat.brand_name}</p>
        <p class="card-text">${obat.background}</p>
</div>
</div>
`;

export default templateDetailObat;
