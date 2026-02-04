import { BookInstance } from '../types/Book.js';

export function renderCard(books: BookInstance[]) {
    const containers: any = document.getElementsByClassName('store__section-carousel') as HTMLCollectionOf<HTMLElement>;
    const container: any = containers[0];

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
                <img class="book-card__image" src="images/covers/${book.image}" alt="book image">
            </div>
            <div class="book-card__actions">
                <button class="book-card__more-button">Read more</button>
                <button class="book-card__cart-button"><img src="../images/icons/${book.inCart ? 'removeCart' : 'addCart'}.svg" alt=""></button>
            </div>`;
        container.appendChild(article);
    })
    container.addEventListener('click', (e: any): void => {
        if (e.target.classList.contains('book-card__cart-button')) {
            return
        } else if (e.target.classList.contains('book-card__more-button')) {
            return
        }
    })
}



/*
HTML:

<article class="book-card">
    <div class="book-card__info">
        <div class="book-card__info-detail">
            <h4 class="book-card__title">Roadside Picnic</h4>
            <span class="book-card__author">Arkady & Boris Strugatsky</span>
        </div>
        <img class="book-card__image" src="images/covers/roadsidepicnic_cover.png" alt="book image">
    </div>
    <div class="book-card__actions">
        <button class="book-card__more-button">Read more</button>
        <button class="book-card__wishlist-button"><img src="images/icons/Heart.svg" alt=""></button>
    </div>
</article>

 */