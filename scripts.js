
  let cart = [];
  let cartTotal = 0;

  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
    if (id === 'order') updateOrderPage();
  }

  function addToCart(item, price) {
    cart.push({ item, price });
    cartTotal += price;
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-summary').textContent = `${cart.length} item${cart.length > 1 ? 's' : ''} · UGX ${cartTotal.toLocaleString()}`;
    document.getElementById('cart-bar').classList.add('show');
  }

  function updateOrderPage() {
    const container = document.getElementById('order-items');
    if (cart.length === 0) {
      container.innerHTML = '<div class="order-item"><span>No items yet — <a href="#" onclick="showPage(\'menu\')">browse menu</a></span><span>-</span></div>';
      document.getElementById('order-total-price').textContent = 'UGX 0';
      return;
    }
    container.innerHTML = cart.map(c => `<div class="order-item"><span>${c.item}</span><span>UGX ${c.price.toLocaleString()}</span></div>`).join('');
    document.getElementById('order-total-price').textContent = `UGX ${cartTotal.toLocaleString()}`;
  }

  function placeOrder() {
    if (cart.length === 0) { alert('Please add items to your cart first!'); return; }
    alert('🎉 Order placed successfully!\n\nYou will receive an MTN Mobile Money prompt shortly.\n\nEstimated delivery: 15–25 minutes.\n\nThank you for using CampusEats!');
    cart = []; cartTotal = 0;
    document.getElementById('cart-bar').classList.remove('show');
    showPage('home');
  }

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });  
