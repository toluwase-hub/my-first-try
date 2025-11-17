const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];

addToCartButtons.forEach(buttton => {
  buttton.addEventListener( "click", () => {
    const productDiv = buttton.parentElement;
    const id = parseInt(productDiv.dataset.id);
    const name = productDiv.dataset.name;
    const price = parseFloat(productDiv.dataset.price);

    addToCart( { id, name, price } );
  })
})

// to add items to a cart
// renderCart is use to update when we add and remove

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem){
        existingItem.quantity += 1;
    } else {
        cart.push( {...product, quantity: 1})
    }
    renderCart();
}

// to display cart items
function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
        <p><strong> ${item.name}</strong> ( x${item.quantity}) - $${item.price * item.quantity}</p>
        <button onclick = "increaseQuantity(${item.id})">+</button>
        <button onclick = "decreaseQuantity(${item.id})">-</button>
        <button onclick = "removeFromCart(${item.id})">Remove</button>
        `;

        cartContainer.appendChild(div);
        total += item.price * item.quantity
    })
    cartTotal.textContent = total.toFixed(2)
}
//  function to remove from cart

function removeFromCart(id){
    cart = cart.filter(item => item.id !== id);
    renderCart();
}
// function decreaseQuantity


   function decreaseQuantity(id) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem){
        existingItem.quantity--;
 }
 renderCart();
}

// function decreaseQuantity
function increaseQuantity(id) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem){
        existingItem.quantity++;
 }
 renderCart();
}
