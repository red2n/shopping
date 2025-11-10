# FreshMart - Shopping Website

A mobile-first supermarket shopping website built with plain HTML, Tailwind CSS, and Vanilla JavaScript.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- **Category Navigation**: Browse products by categories (Fruits, Vegetables, Dairy, Bakery, Beverages, Snacks)
- **Product Search**: Real-time search functionality
- **Shopping Cart**: Add, remove, and update quantities with persistent storage
- **Responsive Grid**: Adaptive product grid that works on all screen sizes

## Files Structure

```
shopping/
├── index.html       # Main HTML file with Tailwind CSS
├── app.js           # JavaScript for functionality
├── products.json    # Product catalog data
└── README.md        # This file
```

## How to Run

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Local Server** (recommended for development):
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Using Node.js
   npx serve
   ```
   Then open `http://localhost:8000` in your browser

## Managing Products and Categories

### Product Data Structure

Products are stored in `products.json` as an array of objects. Each product has:

```json
{
  "id": 1,                    // Unique identifier
  "name": "Product Name",     // Display name
  "category": "fruits",       // Category slug
  "price": 3.99,             // Current price
  "originalPrice": 4.99,     // Original price (optional, for discounts)
  "discount": 20,            // Discount percentage (optional)
  "image": "https://...",    // Product image URL
  "description": "..."       // Short description
}
```

### Available Categories

The website currently supports these categories:
- `fruits` - Fruits
- `vegetables` - Vegetables
- `dairy` - Dairy Products
- `bakery` - Bakery Items
- `beverages` - Beverages
- `snacks` - Snacks

### Adding New Products

1. Open `products.json`
2. Add a new object to the array with all required fields:
   ```json
   {
     "id": 25,
     "name": "Watermelon",
     "category": "fruits",
     "price": 5.99,
     "originalPrice": null,
     "discount": null,
     "image": "https://example.com/watermelon.jpg",
     "description": "Fresh sweet watermelon"
   }
   ```
3. Save the file and refresh the browser

### Adding New Categories

1. **Add to HTML navigation** (`index.html`):
   - Add to mobile menu (around line 40)
   - Add to desktop menu (around line 55)

   ```html
   <li><a href="#" data-category="new-category">New Category</a></li>
   ```

2. **Update products.json**: Add products with the new category slug

3. The JavaScript automatically handles category filtering

### Using Your Own Images

You have several options for product images:

1. **Unsplash** (current): Free high-quality images
   - Format: `https://images.unsplash.com/photo-XXXXXXXXX?w=400&h=400&fit=crop`

2. **Local Images**: Create an `images/` folder
   ```json
   "image": "images/apple.jpg"
   ```

3. **Other CDNs**: Pexels, Pixabay, or your own hosting

## Customization

### Colors

The site uses Tailwind CSS with a green theme. To change colors, modify these classes in `index.html`:
- `bg-green-600` → Primary buttons
- `text-green-600` → Primary text/prices
- `hover:bg-green-700` → Hover states

### Mobile Breakpoints

Tailwind's responsive prefixes used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend API integration
- User authentication
- Payment processing
- Order history
- Product reviews
- Wishlist functionality

## License

Free to use for personal and commercial projects.
