export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string[];
    price: number;
    stock: number;
    image: string;
    description: string;
    isbn: string;
    inCart: boolean;
}

export class BookInstance implements Book {
    private _inCart: boolean;

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public genre: string[],
        public price: number,
        public stock: number,
        public image: string,
        public description: string,
        public isbn: string,
        inCart: boolean = false
    ) {
        this._inCart = inCart;
    }

    get inCart(): boolean {
        return this._inCart;
    }

    addToCart() {
        this._inCart = true;
    }

    removeFromCart() {
        this._inCart = false;
    }
}
