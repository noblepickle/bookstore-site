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
    _inCart;
    constructor(id, title, author, genre, price, stock, image, description, isbn, inCart) {
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
        this._inCart = inCart;
    }
    get inCartStatus() {
        return this._inCart;
    }
    toggleCart() {
        this._inCart = !this._inCart;
    }
}
