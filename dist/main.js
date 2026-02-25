import { BookInstance } from './types/Book.js';
import { booksData } from './data/books.js';
import { renderBookCard } from './components/BookGrid.js';
//import { cartItemIds} from "./utils/cart.js";
export let genres = [];
function init() {
    const bookInstances = booksData.map((book) => new BookInstance(book.id ?? "unknown", book.title ?? "Untitled", book.author ?? "Unknown Author", book.genre ?? [], book.price ?? 0, book.stock ?? 0, book.image ?? "default-cover.png", book.description ?? "", book.isbn ?? "", book.inCart ?? false));
    booksData.forEach((book) => {
        (book.genre || []).forEach((genre) => {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        });
    });
    console.log('Genres:', genres.join(", "));
    function populateBookDatalist() {
        const datalist = document.getElementById('book-titles');
        datalist.innerHTML = '';
        booksData.forEach((book) => {
            const option = document.createElement('option');
            option.value = book.title;
            datalist.appendChild(option);
        });
    }
    populateBookDatalist();
    renderBookCard(bookInstances, '.current-highlights');
    renderBookCard(bookInstances, '.beyond-zone');
    //console.log(cartItemIds(bookInstances));
    setTimeout(() => {
        document.querySelectorAll('.carousel-container').forEach(container => {
            const carouselWrapper = container.querySelector('.carousel-wrapper');
            const leftArrow = container.querySelector('.left-arrow');
            const rightArrow = container.querySelector('.right-arrow');
            if (!carouselWrapper || !leftArrow || !rightArrow) {
                console.error('Carousel wrapper or arrows not found in container:', container);
                return;
            }
            const cardWidth = 250;
            leftArrow.addEventListener('click', () => {
                carouselWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            });
            rightArrow.addEventListener('click', () => {
                carouselWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
            });
        });
    }, 0);
}
document.addEventListener('DOMContentLoaded', init);
