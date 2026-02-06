const orderItems = document.getElementById("orderItems");
const orderTotal = document.getElementById("orderTotal");
const payNowBtn = document.getElementById("payNowBtn");

const cart = JSON.parse(localStorage.getItem("pestoCart")) || [];

function renderOrder() {
  let total = 0;
  orderItems.innerHTML = "";

  if (cart.length === 0) {
    orderItems.innerHTML = "<p>Your cart is empty.</p>";
    orderTotal.innerText = "0";
    return;
  }

  cart.forEach(item => {
    total += item.price * item.qty;

    orderItems.innerHTML += `
      <div class="order-item">
        <img src="${item.image}" alt="${item.name}" />

        <div class="order-info">
          <h4>${item.name}</h4>
          <p>Qty: ${item.qty}</p>
        </div>

        <div class="order-price">
          ₹${item.price * item.qty}
        </div>
      </div>
    `;
  });

  orderTotal.innerText = total;
}

payNowBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill all delivery details");
    return;
  }

  // Clear cart AFTER successful checkout
  localStorage.removeItem("pestoCart");

  // Redirect to success page (MAKE SURE FILE EXISTS)
  window.location.href = "order_sucess.html";
});

renderOrder();
