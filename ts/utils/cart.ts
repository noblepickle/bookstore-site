import { Book } from '../types/Book.js';

// Define a type for cart items
interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

// Function to load local stored cart items
function loadCart(): { items: CartItem[] } {
    const data = localStorage.getItem('cart');
    if (data) { return JSON.parse(data); }
    return { items: [] };
}

// Global cart state
const cartState: { items: CartItem[] } = loadCart();

// Function to update the cart counter in the UI
export function updateCartCounter() {
    const totalQuantity = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartCounter = document.querySelector('.cart-button__counter span');
    if (cartCounter) {
        cartCounter.textContent = totalQuantity.toString();
    }
}

// Function to toggle cart status and update cart state
export function toggleCartStatus(book: Book) {
    const existingItemIndex = cartState.items.findIndex(item => item.id === book.id);

    if (existingItemIndex >= 0) {
        cartState.items.splice(existingItemIndex, 1);
    } else {
        cartState.items.push({ id: book.id, title: book.title, price: book.price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartState));
    updateCartCounter();
}

export function isInCart(bookId: string): boolean {
    return cartState.items.some(item => item.id === bookId);
}
