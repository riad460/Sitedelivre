const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  menuBtn.onclick = function() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  };
  overlay.onclick = function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  };
  closeSidebar.onclick = function() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
};

const cart = [
  { name: "Livre 1", price: "" },
  { name: "Livre 2", price: "" },
  { name: "Livre 3", price:  ""}
];

function updateCartPrice() {
  if (!Array.isArray(cart)) {
    console.error("Le panier n'est pas un tableau.");
    return;
  }
  const validItems = cart.filter(item => typeof item.price === "number" && !isNaN(item.price));
  if (validItems.length === 0) {
    document.getElementById('cartPrice').textContent = "";
  } else {
    const total = validItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartPrice').textContent = total.toFixed(2) + "DA";
  }
}

updateCartPrice();