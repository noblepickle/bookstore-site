import { BookInstance } from '../types/Book.js';

export function getCartTotal(books: BookInstance[]) {
    return books
        .filter(book => book.inCart)  // Uses getter
        .reduce((total, book) => total + book.price, 0);
}

