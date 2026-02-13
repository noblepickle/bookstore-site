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
        if (!genres.includes(book.genre)) {
            genres.push(book.genre ?? undefined);
        } else {
            return
        }
    });

    console.log('Genres:', genres.join(", "));

    renderBookCard(bookInstances, '.current-highlights');
    renderBookCard(bookInstances, '.beyond-zone');

    //console.log(cartItemIds(bookInstances));
}

document.addEventListener('DOMContentLoaded', init);
