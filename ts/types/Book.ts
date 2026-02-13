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
        public readonly id: string,
        public readonly title: string,
        public readonly author: string,
        public readonly genre: string[],
        public readonly price: number,
        public readonly stock: number,
        public readonly image: string,
        public readonly description: string,
        public readonly isbn: string,
        public inCart: boolean
    ) {
        this._inCart = inCart;
    }

    get inCartStatus(): boolean {
        return this._inCart;
    }

    toggleCart() {
        this._inCart = !this._inCart;
    }
}

