import { toggleCartStatus } from '../utils/cart.js';
export function renderBookCard(books, section) {
    const carouselContainer = document.querySelector(`${section}`);
    if (!carouselContainer) {
        console.error(`Element with selector "${section}" not found.`);
        return;
    }
    const container = carouselContainer.querySelector('.store__section-carousel');
    if (!container) {
        console.error('Carousel container not found');
        return;
    }
    container.innerHTML = '';
    books.forEach(book => {
        const article = document.createElement('article');
        article.classList.add('book-card');
        // language=HTML
        article.innerHTML = `
            <div class="book-card__info">
                <div class="book-card__info-detail">
                    <h4 class="book-card__title">${book.title}</h4>
                    <span class="book-card__author">${book.author}</span>
                </div>
                <div class="book-card__image-container">
                    <img class="book-card__image" src="images/covers/${book.image}" alt="${book.title || 'Book Cover'}" draggable="false">
                </div>
            </div>
            <div class="book-card__actions">
                <button class="book-card__more-button">Read more</button>
                <button class="book-card__cart-button"><img src="images/icons/${book.inCartStatus ? 'removeCart' : 'addCart'}.svg" draggable="false" alt=""></button>
            </div>`;
        article.addEventListener('click', (e) => {
            const cartButton = article.querySelector('.book-card__cart-button');
            if (cartButton) {
                cartButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleCartStatus(book);
                    const img = cartButton.querySelector('img');
                    if (img) {
                        img.setAttribute('src', `images/icons/${book.inCartStatus ? 'removeCart' : 'addCart'}.svg`);
                    }
                });
            }
            const moreButton = e.target.closest('.book-card__more-button');
            if (moreButton) {
                console.log('clicked more button: ', book.id);
                return;
            }
            const infoSection = e.target.closest('.book-card__info');
            if (infoSection) {
                console.log('clicked info: ', book.id);
                return;
            }
            console.error('Error: handler not found, id: ', book.id);
        });
        container.appendChild(article);
    });
}
// genre card component ==================
export function renderGenreCard(section) {
    const carouselContainer = document.querySelector(`${section}`);
    if (!carouselContainer) {
        console.error(`Element with selector "${section}" not found.`);
        return;
    }
    const container = carouselContainer.querySelector('.store__section-carousel');
    if (!container) {
        console.error('Carousel container not found');
        return;
    }
    container.innerHTML = '<div class="genre-card__wrapper"></div>';
    const cardWrapper = document.querySelector('.genre-card__wrapper');
}
