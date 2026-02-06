const cartBtn = document.querySelector(".Nav-cart");
const cartPanel = document.querySelector(".cart-panel");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".close-cart");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotalEl = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("pestoCart")) || [];

/* -------------------------
   OPEN / CLOSE CART
-------------------------- */
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function openCart() {
  cartPanel.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCart() {
  cartPanel.classList.remove("active");
  cartOverlay.classList.remove("active");
}

/* -------------------------
   ADD TO CART
-------------------------- */
document.addEventListener("click", e => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  const name = btn.dataset.name;
  const price = Number(btn.dataset.price);
  const image = btn.dataset.image;

  if (!name || !price) return;

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      name,
      price,
      image,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  openCart();
});

/* -------------------------
   RENDER CART
-------------------------- */
function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>₹${item.price}</span>

          <div class="qty-controls">
            <button onclick="updateQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${index}, 1)">+</button>
          </div>

          <button class="remove-btn" onclick="removeItem(${index})">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  cartTotalEl.innerText = total;
}

/* -------------------------
   QUANTITY CONTROL
-------------------------- */
function updateQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

/* -------------------------
   REMOVE ITEM
-------------------------- */
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

/* -------------------------
   SAVE
-------------------------- */
function saveCart() {
  localStorage.setItem("pestoCart", JSON.stringify(cart));
}

renderCart();

const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your bag is empty!");
    return;
  }

  // Save latest cart state
  localStorage.setItem("pestoCart", JSON.stringify(cart));

  // Redirect to checkout page
  window.location.href = "checkout.html";
});





/* =========================
   SEARCH (ENTER TO FILTER)
========================= */

const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.getElementById("searchInput");
const productSection = document.querySelector("#featured-menu"); // products section

/* Toggle input */
searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  searchBox.classList.toggle("active");
  searchInput.focus();
});

/* Close on outside click */
document.addEventListener("click", () => {
  searchBox.classList.remove("active");
});

/* Prevent closing when typing */
searchBox.addEventListener("click", e => e.stopPropagation());

/* ENTER KEY SEARCH */
searchInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  // Scroll to products
  productSection.scrollIntoView({ behavior: "smooth" });

  filterProducts(query);
});

/* FILTER FUNCTION */
function filterProducts(query) {
  const items = document.querySelectorAll(".item, .menu-card");

  items.forEach(item => {
    const name = item.querySelector("h3")?.innerText.toLowerCase() || "";
    item.style.display = name.includes(query) ? "" : "none";
  });
}
