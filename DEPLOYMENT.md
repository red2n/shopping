# Deployment Guide - FreshMart Shopping Website

Your shopping website is ready to deploy! Choose one of the following methods:

---

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag & Drop (No Git needed)**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `/home/navin/shopping` folder onto the page
3. Your site will be live in seconds!
4. Get a URL like: `https://random-name-123.netlify.app`

**Method B: GitHub + Netlify**
1. Create a GitHub repository: https://github.com/new
2. Push your code:
   ```bash
   cd /home/navin/shopping
   git remote add origin https://github.com/YOUR_USERNAME/shopping-website.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Netlify](https://app.netlify.com)
4. Click "Add new site" → "Import an existing project"
5. Connect your GitHub repository
6. Deploy! (Auto-deploys on every push)

---

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   cd /home/navin/shopping
   vercel
   ```

3. Follow the prompts:
   - Setup and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `freshmart-shopping` (or your choice)
   - Directory? **./** (current directory)

4. Your site is live! Get URL like: `https://freshmart-shopping.vercel.app`

**For production deployment:**
```bash
vercel --prod
```

---

### Option 3: GitHub Pages

1. Create a GitHub repository: https://github.com/new

2. Push your code:
   ```bash
   cd /home/navin/shopping
   git remote add origin https://github.com/YOUR_USERNAME/shopping-website.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`, folder: `/ (root)`
   - Click Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/shopping-website/`

---

### Option 4: Surge (Simple & Fast)

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Deploy:
   ```bash
   cd /home/navin/shopping
   surge
   ```

3. Follow prompts:
   - Email & password (first time only)
   - Project path: Press Enter (uses current directory)
   - Domain: Press Enter for random or type custom subdomain

4. Live at: `https://your-subdomain.surge.sh`

---

## 🔧 Local Testing Before Deploy

Test your site locally:

```bash
cd /home/navin/shopping

# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000
```

Open: `http://localhost:8000`

---

## 📝 Pre-Deployment Checklist

✅ All files are in place:
- `index.html`
- `app.js`
- `products.json`
- `README.md`
- `netlify.toml` (for Netlify)
- `vercel.json` (for Vercel)

✅ Test locally to ensure everything works

✅ Git repository initialized and committed

---

## 🎨 Custom Domain (Optional)

After deploying, you can add a custom domain:

**Netlify:**
- Dashboard → Domain settings → Add custom domain

**Vercel:**
- Dashboard → Settings → Domains → Add domain

**GitHub Pages:**
- Repository → Settings → Pages → Custom domain

---

## 🔄 Continuous Deployment

Once connected to GitHub:
- **Netlify & Vercel**: Auto-deploy on every `git push`
- **GitHub Pages**: Auto-deploy on push to main branch
- Make changes, commit, push - site updates automatically!

---

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all files are uploaded
3. Ensure `products.json` is accessible
4. Check deployment logs on your hosting platform

---

## 🚀 Quick Start Commands

```bash
# If using GitHub:
cd /home/navin/shopping
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# Then deploy on Netlify/Vercel via their web dashboard
```

**Recommended:** Start with Netlify Drag & Drop for immediate deployment!
