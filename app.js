// Shopping Cart State
let cart = [];
let products = [];
let currentCategory = 'all';

// Load products from JSON
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        displayProducts(products);
        hideLoading();
    } catch (error) {
        console.error('Error loading products:', error);
        hideLoading();
        showEmptyState();
    }
}

// Display products in grid
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');

    if (productsToDisplay.length === 0) {
        showEmptyState();
        return;
    }

    hideEmptyState();
    productCount.textContent = `${productsToDisplay.length} products available`;

    grid.innerHTML = productsToDisplay.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-36 sm:h-40 md:h-48 object-cover">
                ${product.discount ? `<span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-${product.discount}%</span>` : ''}
            </div>
            <div class="p-3 md:p-4">
                <h3 class="font-semibold text-sm md:text-base text-gray-800 mb-1 truncate">${product.name}</h3>
                <p class="text-xs text-gray-500 mb-2 line-clamp-2 hidden sm:block">${product.description}</p>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="text-lg md:text-xl font-bold text-green-600">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="text-xs text-gray-400 line-through ml-1">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button onclick="addToCart(${product.id})" class="bg-green-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-green-700 transition text-sm">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterByCategory(category) {
    currentCategory = category;
    const categoryTitle = document.getElementById('categoryTitle');

    // Update active state on nav items
    document.querySelectorAll('[data-category]').forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.classList.add('text-green-600', 'border-green-600');
        } else {
            link.classList.remove('text-green-600', 'border-green-600');
        }
    });

    if (category === 'all') {
        categoryTitle.textContent = 'All Products';
        displayProducts(products);
    } else {
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }

    // Close mobile menu after selection
    document.getElementById('mobileMenu').classList.add('hidden');
}

// Search products
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();

    if (searchTerm === '') {
        filterByCategory(currentCategory);
        return;
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    document.getElementById('categoryTitle').textContent = `Search Results for "${query}"`;
    displayProducts(filtered);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showCartNotification();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

// Update cart display
function updateCart() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update cart count badges
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartCountMobile').textContent = cartCount;

    // Update cart total
    document.getElementById('cartTotal').textContent = `$${cartTotal.toFixed(2)}`;

    // Update cart items
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-shopping-cart text-6xl text-gray-300"></i>
                <p class="mt-4 text-gray-600">Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center space-x-4 mb-4 pb-4 border-b">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h4 class="font-semibold text-sm">${item.name}</h4>
                    <p class="text-green-600 font-bold">$${item.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 text-gray-700 w-7 h-7 rounded hover:bg-gray-300">
                        <i class="fas fa-minus text-xs"></i>
                    </button>
                    <span class="w-8 text-center font-semibold">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 text-gray-700 w-7 h-7 rounded hover:bg-gray-300">
                        <i class="fas fa-plus text-xs"></i>
                    </button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show cart notification
function showCartNotification() {
    // Simple visual feedback - you can enhance this
    const cartBtn = document.getElementById('cartBtnMobile');
    cartBtn.classList.add('animate-bounce');
    setTimeout(() => cartBtn.classList.remove('animate-bounce'), 500);
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('hidden');
}

// Share cart on WhatsApp
function shareOnWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some products first.');
        return;
    }
    
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Create table-like structure with proper formatting
    let message = `🛒 *FreshMart Shopping List*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Add each item with nice formatting
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.quantity} × $${item.price.toFixed(2)} = *$${itemTotal.toFixed(2)}*\n\n`;
    });
    
    // Add summary
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 Total Items: *${itemCount}*\n`;
    message += `💰 Total Amount: *$${cartTotal.toFixed(2)}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📍 Order from: FreshMart Online\n`;
    message += `🕒 ${new Date().toLocaleString()}\n`;
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// Show/hide loading
function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function showEmptyState() {
    document.getElementById('emptyState').classList.remove('hidden');
    document.getElementById('productsGrid').classList.add('hidden');
}

function hideEmptyState() {
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('productsGrid').classList.remove('hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load products
    loadProducts();

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }

    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    // Category navigation
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.currentTarget.getAttribute('data-category');
            filterByCategory(category);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }

    if (searchInputMobile) {
        searchInputMobile.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }

    // Cart buttons
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('cartBtnMobile').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', toggleCart);
    
    // WhatsApp share button
    document.getElementById('shareWhatsApp').addEventListener('click', shareOnWhatsApp);

    // Close cart when clicking outside
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            toggleCart();
        }
    });
});
