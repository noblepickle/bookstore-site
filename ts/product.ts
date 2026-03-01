import { booksData } from "./data/books.js";
import { Book } from "./types/Book.js";

function getBookIdFromUrl(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function findBook(id: string)  {
    return booksData.find(book => book.id === id);
}

function getStock(book: Book): string {
    const indicator = document.querySelector('.info__availability');
    if (!indicator) {
        console.error('No indicator found for book');
    }
    if (book.stock === 0) {
        indicator?.classList.add('out-of-stock');
        return "Out of stock" ;
    }
    if (book.stock <= 10) {
        indicator?.classList.add('limited-stock');
        return "Limited stock";
    } else {
        indicator?.classList.add('in-stock');
        return "In stock";
    }
}

function populateBook(book: Book): void {
    //title
    const title = document.querySelector( ".product__title");
    if (title) title.innerHTML = book.title;
    //author
    const author = document.querySelector( ".product__author");
    if (author) author.innerHTML = book.author;
    //cover
    const cover = document.querySelector<HTMLImageElement>( ".product__cover");
    if (cover) {
        cover.src = `images/covers/${book.image}`;
        cover.alt = `cover of ${book.title}`;
    }
    //description
    const description = document.querySelector( ".info__description");
    if (description) description.innerHTML = book.description;
    //price
    const price = document.querySelector( ".meta__price");
    if (price) price.innerHTML = `${book.price.toString()}€`;
    //isbn
    const isbn = document.querySelector( ".meta__isbn");
    if (isbn) isbn.innerHTML = book.isbn;
    //additional info
    const pages = document.querySelector('.meta__cover-pages');
    if (pages) pages.innerHTML = `${book.coverType} / ${book.pages} Pages`;
    //stock
    const stock = document.querySelector( ".info__stock");
    if (stock) stock.innerHTML = getStock(book);
}

function init(): void {
    const bookId = getBookIdFromUrl();
    if (bookId === null) {
        console.error(`Id is ${bookId}`);
        return;
    }

    const book = findBook(bookId);
    if (!book) {
        console.error(`book is ${bookId}`);
        return;
    }

    populateBook(book);

}

document.addEventListener("DOMContentLoaded", init);
