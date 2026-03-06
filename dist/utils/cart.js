// Function to load local stored cart items
function loadCart() {
    const data = localStorage.getItem('cart');
    if (data) {
        return JSON.parse(data);
    }
    return { items: [] };
}
// Global cart state
const cartState = loadCart();
// Function to update the cart counter in the UI
export function updateCartCounter() {
    const totalQuantity = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartCounter = document.querySelector('.cart-button__counter span');
    if (cartCounter) {
        cartCounter.textContent = totalQuantity.toString();
    }
}
// Function to toggle cart status and update cart state
export function toggleCartStatus(book) {
    const existingItemIndex = cartState.items.findIndex(item => item.id === book.id);
    if (existingItemIndex >= 0) {
        cartState.items.splice(existingItemIndex, 1);
    }
    else {
        cartState.items.push({ id: book.id, title: book.title, price: book.price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartState));
    updateCartCounter();
}
export function addToCart(book, quantity) {
    const existingItemIndex = cartState.items.findIndex(item => item.id === book.id);
    if (existingItemIndex >= 0) {
        cartState.items[existingItemIndex].quantity += quantity;
    }
    else {
        cartState.items.push({ id: book.id, title: book.title, price: book.price, quantity: quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cartState));
    updateCartCounter();
}
export function isInCart(bookId) {
    return cartState.items.some(item => item.id === bookId);
}
