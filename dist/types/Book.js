export class BookInstance {
    id;
    title;
    author;
    genre;
    price;
    stock;
    image;
    description;
    isbn;
    inCart;
    pages;
    coverType;
    _inCart;
    constructor(id, title, author, genre, price, stock, image, description, isbn, inCart, pages, coverType) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.description = description;
        this.isbn = isbn;
        this.inCart = inCart;
        this.pages = pages;
        this.coverType = coverType;
        this._inCart = inCart;
    }
    get inCartStatus() {
        return this._inCart;
    }
    toggleCart() {
        this._inCart = !this._inCart;
    }
}
