// Global cart state
const cartState = {
    items: [],
};
// Function to update the cart state
function updateCartState(book, add) {
    const existingItemIndex = cartState.items.findIndex(item => item.id === book.id);
    if (add) {
        if (existingItemIndex >= 0) {
            cartState.items[existingItemIndex].quantity += 1;
        }
        else {
            cartState.items.push({ id: book.id, quantity: 1 });
        }
    }
    else {
        if (existingItemIndex >= 0) {
            cartState.items[existingItemIndex].quantity -= 1;
            if (cartState.items[existingItemIndex].quantity <= 0) {
                cartState.items.splice(existingItemIndex, 1);
            }
        }
    }
}
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
    book.toggleCart();
    updateCartState(book, book.inCartStatus);
    updateCartCounter();
}
// Function to get the cart state
export function getCartState() {
    return cartState;
}
