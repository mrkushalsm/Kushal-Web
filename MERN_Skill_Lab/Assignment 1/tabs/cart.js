function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let originalPrice = 0;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('order-summary').style.display = 'none';
    } else {
        cart.forEach((item, index) => {
            let cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'tile';
            cartItemDiv.style.width = "20em";
            cartItemDiv.style.height = "18em";
            cartItemDiv.style.paddingTop = "2em";

            cartItemDiv.innerHTML = `
                <h2 class="tile_head">${item.name}</h2>
                <p class="tile_info">Price: $${item.price.toFixed(2)}</p>
                <button class="add_to_cart" onclick="removeFromCart(${index})">Remove from Cart</button>
            `;

            cartItemsContainer.appendChild(cartItemDiv);
            originalPrice += item.price;
        });
        document.getElementById('order-summary').style.display = 'block';
    }

    updateOrderSummary(originalPrice);
}

function updateOrderSummary(originalPrice) {
    const pickupPrice = 10;
    const taxPrice = 3;
    const totalPrice = originalPrice + pickupPrice + taxPrice;

    document.getElementById('original-price').textContent = `$${originalPrice.toFixed(2)}`;
    document.getElementById('pickup-price').textContent = `$${pickupPrice.toFixed(2)}`;
    document.getElementById('tax-price').textContent = `$${taxPrice.toFixed(2)}`;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

function removeFromCart(itemIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

if (document.getElementById('cart-items')) {
    displayCartItems();
}
