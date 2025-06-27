const products = [
    { id: 1, title: "Wireless Headphones", price: 3899, image: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_3d51df93-724a-4f08-b491-bd678fb6e8a4.png?v=1728873072" },
    { id: 2, title: "Wired Headphones", price: 2499, image: "https://www.portronics.com/cdn/shop/files/Portronics_Conch_Gamma_wired_headset_with_in-line_mic.jpg?v=1747741650" },
    { id: 3, title: "Tablet", price: 24999, image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/protablets-2048px-232431.jpg?auto=webp&quality=75&width=1024" },
    { id: 4, title: "Laptop", price: 55999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwOC6_XLG0gr4PCKqb1CzYd1SzD6yb39CkA&s" },
    { id: 5, title: "Smartwatch", price: 3999, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26246334/2023/12/6/49f637ed-1cbb-4d47-a0eb-1d00b26ecd931701840336541-Noise-ColorFit-Icon-2-Smartwatch---Forest-Green-367170184033-1.jpg" },
    { id: 6, title: "Gaming Mouse", price: 999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiD6Wqz4l-Acdu26ZKo6gJB9erkUqsu-jpTA&s" },
    { id: 7, title: "Smartphone", price: 16999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 8, title: "Keyboard", price: 2499, image: "https://www.jiomart.com/images/product/original/rvbevvavpp/enter-typist-mini-usb-wired-slim-mini-laptop-keyboard-black-product-images-orvbevvavpp-p602243603-0-202306082033.jpg?im=Resize=(420,420)" },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const paymentMethod = document.getElementById("payment-method");
const modal = document.getElementById("payment-modal");

// Render Products
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
    productList.appendChild(card);
});

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    if (!paymentMethod.value) {
        alert("Please select a payment method.");
        return;
    }

    modal.style.display = "flex";
    clearCart();
}

function closeModal() {
    modal.style.display = "none";
}

function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
      <span>${item.title} - ₹${item.price}</span>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}
