export function getCartTotal(books) {
    return books
        .filter(book => book.inCart) // Uses getter
        .reduce((total, book) => total + book.price, 0);
}
