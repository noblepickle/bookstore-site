import { BookInstance } from './types/Book.js';
import { booksData } from './data/books.js';
import { renderCard } from './components/BookGrid.js';
import { getCartItemIds} from "./utils/cart.js";

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
    renderCard(bookInstances);

    console.log(getCartItemIds(bookInstances));
}

document.addEventListener('DOMContentLoaded', init);
