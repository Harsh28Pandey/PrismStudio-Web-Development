let cart = [
    { name: "Bluetooth Speaker", price: 1500 },
    { name: "Power Bank", price: 999 },
    { name: "USB Cable", price: 299 },
    { name: "Laptop Stand", price: 1250 }
];

function renderCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span>₹${item.price}</span>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
        container.appendChild(div);
    });

    let shipping = subtotal < 500 ? 50 : 0;
    document.getElementById("subtotal").textContent = subtotal;
    document.getElementById("shipping").textContent = shipping;
    document.getElementById("total").textContent = subtotal + shipping;
    document.getElementById("badge").textContent = shipping === 0 ? "🎁 Free Shipping!" : "";
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function placeOrder() {
    document.getElementById("confirmation").classList.remove("hidden");
    setTimeout(() => {
        cart = [];
        renderCart();
        document.getElementById("confirmation").classList.add("hidden");
    }, 3000);
}

renderCart();
