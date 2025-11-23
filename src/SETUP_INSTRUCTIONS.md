# 🛠️ Setup Instructions

Follow these steps to get your NCRTC website running locally and deployed online.

---

## ⚠️ Important: Handling Figma Assets

Your project uses images imported from Figma. Before deploying, you need to handle these assets.

### Images Currently Used:

1. **NCRTC Logo** - Used in Header and Footer
2. **Train Hero Image** - Main hero section
3. **Route Map** - Network visualization
4. **Facility Images** (5 images) - Facilities section

### Option 1: Download from Figma Make (Easiest)

When you download your project from Figma Make, all images will be included automatically in the correct format.

### Option 2: Manual Asset Management

If assets are missing after download:

1. Create a `public` folder in your project root
2. Create an `assets` folder inside: `public/assets/`
3. Save all images there
4. Update imports in your components:

**Before:**
```tsx
import logo from 'figma:asset/ef2381e67a01993bc3e64608d41a297647c090de.png';
```

**After:**
```tsx
import logo from '/assets/ncrtc-logo.png';
```

---

## 📦 Step-by-Step Local Setup

### 1. Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- A code editor like **VS Code** - [Download here](https://code.visualstudio.com/)

### 2. Download Project

From Figma Make:
1. Click the **Download** button
2. Extract the ZIP file to a folder

### 3. Install Dependencies

Open terminal in your project folder:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 4. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser!

---

## 🐙 Upload to GitHub

### First Time Setup

```bash
# Initialize git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: NCRTC website"

# Create repository on github.com
# Then add remote and push:
git remote add origin https://github.com/arpitgovil/ncrtc-website.git
git branch -M main
git push -u origin main
```

### Future Updates

```bash
git add .
git commit -m "Your update message"
git push
```

---

## 🚀 Deploy Online (Choose One)

### ⭐ Option 1: Vercel (Recommended)

**Fastest and easiest deployment!**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **New Project**
4. Import your `ncrtc-website` repository
5. Click **Deploy**

✅ Done! Live in 2 minutes at `https://your-site.vercel.app`

**Features:**
- ✨ Automatic deployments on every push
- 🌐 Free custom domain
- 📊 Analytics included
- ⚡ Global CDN

---

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. **New site from Git** → Select repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy**

✅ Live at `https://your-site.netlify.app`

---

### Option 3: GitHub Pages

**Good for simple hosting**

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://arpitgovil.github.io/ncrtc-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/ncrtc-website/',
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable in GitHub:
   - Repository → **Settings** → **Pages**
   - Source: **gh-pages** branch
   - Save

✅ Live at `https://arpitgovil.github.io/ncrtc-website`

---

## 📱 Test Your Website

After deployment, test on:
- ✅ Desktop browsers (Chrome, Firefox, Safari)
- ✅ Mobile devices (iOS, Android)
- ✅ Different screen sizes
- ✅ Dark mode toggle
- ✅ Route & fare calculator
- ✅ All links work

---

## 🔧 Common Issues & Fixes

### Issue: "Module not found"
**Fix:** Run `npm install` again

### Issue: Build fails
**Fix:** 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Images not loading
**Fix:** Check that all image files are in the correct location

### Issue: White screen after deployment
**Fix:** Check browser console for errors, ensure all dependencies are installed

---

## 📚 Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run build -- --debug
```

---

## 🎨 Customization Tips

Want to modify the website?

1. **Colors**: Edit `/styles/globals.css`
2. **Content**: Modify component files in `/components/`
3. **Stations**: Update station list in `/components/RouteMapSection.tsx`
4. **Footer**: Edit `/components/Footer.tsx`

---

## 💡 Performance Tips

After deployment:
- ✅ Enable Lighthouse in Chrome DevTools
- ✅ Check Performance score
- ✅ Optimize images (use WebP format)
- ✅ Enable Gzip/Brotli compression (automatic on Vercel/Netlify)

---

## 🆘 Getting Help

If you encounter issues:

1. Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Read the [README.md](./README.md)
3. Search on [Stack Overflow](https://stackoverflow.com)
4. Check [Vite documentation](https://vitejs.dev)

---

## ✅ Checklist

Before deploying:
- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Images and assets are included
- [ ] Dark mode works
- [ ] Fare calculator works
- [ ] All sections display correctly
- [ ] Responsive on mobile
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Deployment platform chosen
- [ ] Website is live!

---

🎉 **Congratulations!** You're ready to launch your NCRTC website!

Made with ❤️ by [ARPIT GOVIL](https://github.com/arpitgovil)
