import { BookInstance } from '../types/Book.js';
//import { cartItemIds } from "../utils/cart.js";

export function renderBookCard(books: BookInstance[], section: string) {
    const carouselContainer: HTMLElement | null = document.querySelector(`${section}`);
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
        const article = document.createElement('article') ;
        article.classList.add('book-card');
        // language=HTML
        article.innerHTML = `
            <div class="book-card__info">
                <div class="book-card__info-detail">
                    <h4 class="book-card__title">${book.title}</h4>
                    <span class="book-card__author">${book.author}</span>
                </div>
                <div class="book-card__image-container">
                    <img class="book-card__image" src="images/covers/${book.image}" alt="${book.title || 'Book Cover'}">
                </div>
            </div>
            <div class="book-card__actions">
                <button class="book-card__more-button">Read more</button>
                <button class="book-card__cart-button"><img src="images/icons/${book.inCartStatus ? 'removeCart' : 'addCart'}.svg" alt=""></button>
            </div>`;

        article.addEventListener('click', (e: MouseEvent): void => {
            const cartButton = (e.target as HTMLElement).closest('.book-card__cart-button');
            if (cartButton) {
                book.toggleCart();
                const img = cartButton.querySelector('img') as HTMLImageElement;
                if (img) {
                    img.src = `images/icons/${book.inCartStatus ? 'removeCart' : 'addCart'}.svg`;
                }
                console.log('clicked cart button:', book.id, ' Status: ', book.inCartStatus);
                return;
            }

            const moreButton = (e.target as HTMLElement).closest('.book-card__more-button');
            if (moreButton) {
                console.log('clicked more button: ', book.id);
                return;
            }

            const infoSection = (e.target as HTMLElement).closest('.book-card__info');
            if (infoSection) {
                console.log('clicked info: ', book.id);
                return;
            }

            console.error('Error: handler not found, id: ', book.id);
        });

        container.appendChild(article);
    })
}

// genre card component ==================


export function renderGenreCard(section: string) {
    const carouselContainer: HTMLElement | null = document.querySelector(`${section}`);
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
    const cardWrapper: HTMLElement | null = document.querySelector('.genre-card__wrapper');



}
