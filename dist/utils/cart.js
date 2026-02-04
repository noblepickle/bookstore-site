export function getCartItemIds(books) {
    const cartItemIds = [];
    books.forEach(book => {
        if (book.inCart && book != cartItemIds) {
            cartItemIds.push(book.id);
        }
    });
    return cartItemIds;
}
export function getCartTotal(books) {
    return books
        .filter(book => book.inCart)
        .reduce((total, book) => total + book.price, 0);
}
