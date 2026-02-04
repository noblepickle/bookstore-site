import { BookInstance } from '../types/Book.js';

export function getCartItemIds(books: BookInstance[]): string[] {
    const cartItemIds: any  = [];

    books.forEach (book => {
        if (book.inCart && book != cartItemIds) {
            cartItemIds.push(book.id);
        }
    })
    return cartItemIds;
}

export function getCartTotal(books: BookInstance[]) {
    return books
        .filter(book => book.inCart)
        .reduce((total, book) => total + book.price, 0);
}

