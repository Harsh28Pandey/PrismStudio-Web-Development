const products = [
    { title: "Smartphone", price: 45999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", category: "electronics" },
    { title: "T-Shirt", price: 2399, image: "https://m.media-amazon.com/images/I/516apkFXxkL.jpg", category: "fashion" },
    { title: "Novel Book", price: 1299, image: "https://images.meesho.com/images/products/222954241/dqnsc_512.webp", category: "books" },
    { title: "Headphones", price: 1599, image: "https://media.croma.com/image/upload/v1674045672/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png", category: "electronics" },
    { title: "Jeans", price: 4399, image: "https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg", category: "fashion" },
    { title: "Tablet", price: 23599, image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey-500x500.png", category: "electronics" },
    { title: "Sneakers", price: 4599, image: "https://neemans.com/cdn/shop/files/ND-EBSneaker-PebbleGrey-_WebOptimized_h_6349f9b2-03fa-4517-8139-b19c61645a4e.jpg?v=1724987944&width=800", category: "fashion" },
    { title: "Self-Help Book", price: 1999, image: "https://cdn.penguin.co.in/wp-content/uploads/2025/01/9789366110851.jpg", category: "books" },
];

let cartCount = 0;
let cartTotal = 0;

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const cartCountDisplay = document.getElementById('cartCount');
const cartTotalDisplay = document.getElementById('cartTotal');
const buyNowBtn = document.getElementById('buyNowBtn');

function displayProducts(items) {
    productGrid.innerHTML = "";
    items.forEach(p => {
        productGrid.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.title}" />
        <div class="card-content">
          <h3>${p.title}</h3>
          <p>₹${p.price}</p>
          <p>Category: ${p.category}</p>
          <button class="add-cart" onclick='addToCart(${p.price})'>Add to Cart</button>
        </div>
      </div>`;
    });
}

function filterAndDisplay() {
    let value = searchInput.value.toLowerCase();
    let category = categoryFilter.value;
    let sort = sortPrice.value;

    let filtered = products.filter(p =>
        p.title.toLowerCase().includes(value) &&
        (category === "all" || p.category === category)
    );

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

function addToCart(price) {
    cartCount++;
    cartTotal += price;
    cartCountDisplay.textContent = cartCount;
    cartTotalDisplay.textContent = cartTotal;
}

buyNowBtn.addEventListener("click", () => {
    if (cartCount === 0) {
        alert("🛒 Your cart is empty. Please add some products.");
    } else {
        alert(`✅ Thank you! You are buying ${cartCount} item(s) for ₹${cartTotal}.`);
    }
});

// Initial Display
displayProducts(products);

// Event Listeners
searchInput.addEventListener('input', filterAndDisplay);
categoryFilter.addEventListener('change', filterAndDisplay);
sortPrice.addEventListener('change', filterAndDisplay);