
function addToCart() {
  const select = document.getElementById("quantity");
  const quantity = select.value;
  const product = {
    name: "Raw Coriander",
    quantity: quantity,
    price: quantity == 250 ? 30 : quantity == 500 ? 55 : 100
  };
  localStorage.setItem("cart", JSON.stringify(product));
  alert("Added to cart!");
}

window.onload = function () {
  if (document.getElementById("cartItems")) {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const item = JSON.parse(cartData);
      document.getElementById("cartItems").innerHTML = `
        <p>${item.name} - ${item.quantity}g - ₹${item.price}</p>
      `;
      document.getElementById("totalPrice").textContent = "Total: ₹" + item.price;
    } else {
      document.getElementById("cartItems").innerHTML = "<p>Your cart is empty.</p>";
    }
  }
};
