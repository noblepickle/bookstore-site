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
    _inCart;
    constructor(id, title, author, genre, price, stock, image, description, isbn, inCart = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.description = description;
        this.isbn = isbn;
        this._inCart = inCart;
    }
    get inCart() {
        return this._inCart;
    }
    addToCart() {
        this._inCart = true;
    }
    removeFromCart() {
        this._inCart = false;
    }
}
