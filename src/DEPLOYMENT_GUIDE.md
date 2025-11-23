# 🚀 Deployment Guide

Complete guide to host your NCRTC website on GitHub and deploy it online.

---

## 📋 Table of Contents

1. [Add to GitHub Repository](#1-add-to-github-repository)
2. [Deploy to Vercel (Recommended)](#2-deploy-to-vercel-recommended)
3. [Deploy to Netlify](#3-deploy-to-netlify)
4. [Deploy to GitHub Pages](#4-deploy-to-github-pages)

---

## 1️⃣ Add to GitHub Repository

### Step 1: Download Your Project

In Figma Make, click the **Download** button to get all your project files as a ZIP.

### Step 2: Extract and Prepare

1. Extract the ZIP file to a folder (e.g., `ncrtc-website`)
2. Open terminal/command prompt in that folder

### Step 3: Initialize Git Repository

```bash
# Navigate to your project folder
cd ncrtc-website

# Initialize git
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: NCRTC website"
```

### Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `ncrtc-website` (or any name you prefer)
4. Description: "NCRTC Website - Delhi-Ghaziabad-Meerut Corridor"
5. Choose **Public** or **Private**
6. **DO NOT** check "Initialize with README" (you already have one)
7. Click **Create repository**

### Step 5: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/arpitgovil/ncrtc-website.git

# Push your code
git branch -M main
git push -u origin main
```

✅ **Done!** Your code is now on GitHub at: `https://github.com/arpitgovil/ncrtc-website`

---

## 2️⃣ Deploy to Vercel (Recommended) ⭐

**Vercel** is the easiest and fastest way to deploy React/Vite apps.

### Steps:

1. **Go to [vercel.com](https://vercel.com)**
2. Click **Sign Up** → Choose **Continue with GitHub**
3. After signing in, click **Add New** → **Project**
4. **Import** your `ncrtc-website` repository
5. Vercel auto-detects it's a Vite project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**

⏱️ Wait 1-2 minutes...

🎉 **Your site is live!** You'll get a URL like: `https://ncrtc-website.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your custom domain (e.g., `ncrtc.yourname.com`)

---

## 3️⃣ Deploy to Netlify

**Netlify** is another excellent free hosting platform.

### Method 1: Deploy via GitHub

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign Up** → **GitHub**
3. Click **Add new site** → **Import an existing project**
4. Choose **GitHub** → Select your repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

🎉 Live at: `https://your-site-name.netlify.app`

### Method 2: Drag & Drop

1. Build your project locally:
   ```bash
   npm run build
   ```
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Done! Instant deploy

---

## 4️⃣ Deploy to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://arpitgovil.github.io/ncrtc-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ncrtc-website/', // Your repo name
});
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** → **/ (root)** → **Save**

🎉 Live at: `https://arpitgovil.github.io/ncrtc-website`

---

## 🔄 Making Updates

After making changes to your website:

```bash
# Save your changes
git add .
git commit -m "Description of changes"
git push

# For Vercel/Netlify: Auto-deploys!
# For GitHub Pages: Run again
npm run deploy
```

---

## 🎯 Quick Comparison

| Platform | Speed | Setup | Custom Domain | Auto Deploy |
|----------|-------|-------|---------------|-------------|
| **Vercel** | ⚡⚡⚡ | Easiest | ✅ Free | ✅ Yes |
| **Netlify** | ⚡⚡⚡ | Easy | ✅ Free | ✅ Yes |
| **GitHub Pages** | ⚡⚡ | Medium | ✅ (Paid) | ❌ Manual |

**Recommendation**: Use **Vercel** for the best experience!

---

## 🆘 Troubleshooting

### Build Errors

If you get build errors, ensure all dependencies are installed:
```bash
npm install
```

### 404 on Refresh (SPA Issue)

Add a `_redirects` file in your `public` folder:
```
/*    /index.html   200
```

### Images Not Loading

Make sure all image imports use the correct paths. In Figma Make, images from `figma:asset/...` need to be downloaded and placed in your project.

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

Good luck! 🚀 Your NCRTC website will be live soon!
