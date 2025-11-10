# FreshMart - Shopping Website

A mobile-first Indian supermarket shopping website built with plain HTML, Tailwind CSS, and Vanilla JavaScript.

## 🚀 Live Demo

Visit the live site: `https://red2n.github.io/shopping/`

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- **Dynamic Categories**: Auto-generated from products.json tree structure
- **Product Search**: Real-time search functionality
- **Shopping Cart**: Add, remove, and update quantities with persistent storage
- **WhatsApp Sharing**: Share cart with formatted order details
- **Responsive Grid**: Adaptive product grid that works on all screen sizes
- **WebP Images**: Optimized 400x400 images for fast loading
- **British Pounds (£)**: All prices in GBP currency

## 📁 Project Structure

```
shopping/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD
├── images/                  # Product images (WebP, 400x400)
│   ├── basmati-rice.webp
│   ├── paneer.webp
│   └── ... (36 images)
├── index.html               # Main HTML file
├── app.js                   # JavaScript functionality
├── products.json            # Product catalog (tree format)
├── favicon.svg              # Shopping cart favicon
├── netlify.toml            # Netlify configuration
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS via CDN
- **Vanilla JavaScript** - No frameworks
- **Font Awesome** - Icons
- **WebP** - Optimized images

## 🎯 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/red2n/shopping.git
   cd shopping
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🚀 Deployment

### GitHub Pages (Automatic - CI/CD Enabled)

The site automatically deploys to GitHub Pages when you push to the `master` branch.

**Setup Steps:**

1. **Enable GitHub Pages**
   - Go to your repo: Settings → Pages
   - Source: "GitHub Actions"
   - Save

2. **Push your changes**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master
   ```

3. **Automatic Deployment**
   - GitHub Actions will automatically build and deploy
   - View progress: Actions tab in your repository
   - Live URL: `https://red2n.github.io/shopping/`

### Alternative Deployments

<details>
<summary><b>Netlify (Drag & Drop)</b></summary>

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `shopping` folder
3. Get instant URL like: `https://freshmart-xyz.netlify.app`

</details>

<details>
<summary><b>Vercel CLI</b></summary>

```bash
npm install -g vercel
cd shopping
vercel
```

</details>

## 📦 Managing Products and Categories

### Product Data Structure (Tree Format)

Products are organized in `products.json` using a hierarchical tree structure:

```json
{
  "categories": {
    "grains": {
      "name": "Grains & Pulses",
      "products": [
        {
          "id": 1,
          "name": "Basmati Rice",
          "price": 8.99,
          "originalPrice": 10.99,
          "discount": 18,
          "image": "images/basmati-rice.webp",
          "description": "Premium aged Basmati rice, 5kg"
        }
      ]
    }
  }
}
```

### Adding New Products

Simply add products to the appropriate category in `products.json`:

```json
"spices": {
  "name": "Spices",
  "products": [
    ...existing products...,
    {
      "id": 37,
      "name": "Cinnamon Sticks",
      "price": 3.49,
      "originalPrice": null,
      "discount": null,
      "image": "images/cinnamon.webp",
      "description": "Ceylon cinnamon sticks, 100g"
    }
  ]
}
```

### Adding New Categories

1. Add a new category in `products.json`:
   ```json
   "frozen": {
     "name": "Frozen Foods",
     "products": [...]
   }
   ```

2. The navigation will automatically update!

### Adding Product Images

1. Save images as WebP format (400x400px) in the `images/` folder
2. Reference in products.json: `"image": "images/your-product.webp"`

**Convert images to WebP:**
```bash
# Using curl (from Unsplash)
curl "https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop&fm=webp" -o images/product.webp
```

## 🎨 Customization

### Colors

Modify Tailwind classes in `index.html`:
- `bg-green-600` → Primary buttons
- `text-green-600` → Primary text/prices
- `hover:bg-green-700` → Hover states

### Currency

Currency is set to British Pounds (£). To change:
- Update all `£` symbols in `app.js`
- Search and replace: `£` → `$` (or your currency)

### Branding

- **Site Name**: Change "FreshMart" in `index.html` (line 6 & 18)
- **Favicon**: Replace `favicon.svg` with your icon
- **Colors**: Update green theme throughout

## 🔧 Features Explained

### WhatsApp Cart Sharing

Users can share their cart via WhatsApp with a formatted message:
- Product list with quantities and prices
- Total items and amount
- Timestamp

### Persistent Cart

Cart data is saved in `localStorage`:
- Survives page refreshes
- Saved per browser

### Dynamic Navigation

Categories are automatically generated from `products.json`:
- No hardcoding required
- Add categories by adding products

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal and commercial use.

## 🐛 Issues

Found a bug? Please open an issue on [GitHub Issues](https://github.com/red2n/shopping/issues).

## 📞 Support

For questions or support, please open a discussion on GitHub.

---

**Built with ❤️ for the Indian community in London, UK**