const cartItems = [];
const totalPriceElement = document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = parseInt(product.getAttribute('data-price'));

        // Tambahkan produk ke keranjang
        cartItems.push({ name: productName, price: productPrice });
        
        // Update tampilan keranjang
        updateCart();
    });
});

function updateCart() {
    // Kosongkan daftar keranjang sebelumnya
    cartItemsElement.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        total += item.price;

        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    totalPriceElement.textContent = `Total: Rp${total}`;
}
