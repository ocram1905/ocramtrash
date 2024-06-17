// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cart = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const cartToggle = document.querySelector('.cart-toggle');

    let total = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const price = parseInt(this.getAttribute('data-price'));

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>Video: ${videoSrc}</span>
                <span>Price: $${price}</span>
            `;
            cartItems.appendChild(listItem);

            total += price;
            cartTotal.textContent = `$${total}`;
        });
    });

    cartToggle.addEventListener('click', function() {
        cart.classList.toggle('open');
    });

    checkoutButton.addEventListener('click', function() {
        alert(`Total amount to pay: $${total}`);
        cartItems.innerHTML = '';
        cartTotal.textContent = '$0';
        total = 0;
    });
});
