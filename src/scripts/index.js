import { applyInputRangeStyle } from "./inputRange.js"
import { albumList } from "./albumsDatabase.js";
import { toggleDarkMode, loadThemePreference } from "./theme.js";

document.querySelectorAll('.genreButton').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.genreButton').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

function renderAlbums(albums) {
    const albumsList = document.querySelector('.albums__list');
    albumsList.innerHTML = '';

    albums.forEach(album => {
        const albumItem = document.createElement('li');
        albumItem.classList.add('album');

        const albumImage = document.createElement('img');
        albumImage.classList.add('album__image');
        albumImage.src = album.img;
        albumItem.appendChild(albumImage);

        const albumDetail = document.createElement('div');
        albumDetail.classList.add('album-detail');
        albumItem.appendChild(albumDetail);

        const albumTitle = document.createElement('h3');
        albumTitle.classList.add('title-3', 'album-detail__title');
        albumTitle.textContent = album.title;
        albumDetail.appendChild(albumTitle);

        const albumSubtitle = document.createElement('div');
        albumSubtitle.classList.add('album-subtitle');
        albumDetail.appendChild(albumSubtitle);

        const bandParagraph = document.createElement('p');
        bandParagraph.textContent = album.band;
        albumSubtitle.appendChild(bandParagraph);

        const genreParagraph = document.createElement('p');
        genreParagraph.textContent = album.genre;
        albumSubtitle.appendChild(genreParagraph);

        const albumPrice = document.createElement('div');
        albumPrice.classList.add('album-price');
        albumDetail.appendChild(albumPrice);

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `R$ ${album.price}`;
        albumPrice.appendChild(priceParagraph);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        albumPrice.appendChild(buyButton);

        albumsList.appendChild(albumItem);
    });
}

renderAlbums(albumList);

document.querySelector('.header__button').addEventListener('click', toggleDarkMode);

function updatePriceRange() {
    const rangeInput = document.getElementById('range');
    const priceSpan = document.querySelector('.price-range__title3--highlight');
    priceSpan.textContent = `R$ ${rangeInput.value}`;
    filterAlbumsByPrice();
}

function filterAlbumsByPrice() {
    const rangeInput = document.getElementById('range').value;
    const filteredAlbums = albumList.filter(album => parseFloat(album.price) <= parseFloat(rangeInput));
    renderAlbums(filteredAlbums);
}

document.getElementById('range').addEventListener('input', updatePriceRange);

function routine() {
    applyInputRangeStyle();
    updatePriceRange();
    loadThemePreference();
}

routine()