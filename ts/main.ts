import { BookInstance } from './types/Book.js';
import { booksData } from './data/books.js';
import { renderBookCard } from './components/BookGrid.js';
//import { cartItemIds} from "./utils/cart.js";

export let genres: string[] = [];

function init() {
    const bookInstances: BookInstance[] = booksData.map((book: any) =>
        new BookInstance(
            book.id ?? "unknown",
            book.title ?? "Untitled",
            book.author ?? "Unknown Author",
            book.genre ?? [],
            book.price ?? 0,
            book.stock ?? 0,
            book.image ?? "default-cover.png",
            book.description ?? "",
            book.isbn ?? "",
            book.inCart ?? false
        )
    );

    booksData.forEach((book: any) => {
        (book.genre || []).forEach((genre: string) => {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        });
    });
    console.log('Genres:', genres.join(", "));

    function populateBookDatalist(): void {
        const datalist = document.getElementById('book-titles') as HTMLDataListElement;
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
}

document.addEventListener('DOMContentLoaded', init);
