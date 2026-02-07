/*
export function cartItemIds(books: BookInstance[]): string[] {
    const cartItemIds: string[] = books.filter((book: BookInstance) => book.inCart);

    return cartItemIds;
}*/
export function getCartTotal(books) {
    return books
        .filter(book => book.inCart)
        .reduce((total, book) => total + book.price, 0);
}
