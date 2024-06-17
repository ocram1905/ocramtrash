// script.js
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    let total = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const price = parseInt(this.getAttribute('data-price'));

            const listItem = document.createElement('li');
            listItem.textContent = `Video: ${videoSrc} - Price: $${price}`;

            cartItems.appendChild(listItem);

            total += price;
            cartTotal.textContent = `$${total}`;
        });
    });

    checkoutButton.addEventListener('click', function() {
        alert(`Total amount to pay: $${total}. Thank you for your purchase!`);
        cartItems.innerHTML = '';
        cartTotal.textContent = '$0';
        total = 0;
    });
});
