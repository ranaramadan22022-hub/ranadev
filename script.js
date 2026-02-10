let count = 0;
let total = 0;

function addToCart(price) {
  count++;
  total += price;

  document.getElementById("cart-count").textContent = count;
  document.getElementById("total-price").textContent = total;
}