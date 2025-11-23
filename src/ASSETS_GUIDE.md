# 🖼️ Assets & Images Guide

Guide for handling all images and assets in your NCRTC website.

---

## 📦 Images Used in This Project

### 1. **NCRTC Logo**
- **Used in**: Header, Footer
- **Figma ID**: `ef2381e67a01993bc3e64608d41a297647c090de.png`
- **Purpose**: Main branding logo

### 2. **Train Hero Image**
- **Used in**: Hero Section
- **Figma ID**: `c9f68c30ec7a10c53f2e8ecc1df6a35bdfef2e5c.png`
- **Purpose**: Main hero banner showing NCRTC train

### 3. **Route Map**
- **Used in**: Route Map Section (with zoom functionality)
- **Figma ID**: `c1a1df521a535a84419d6a8959b258b68c006a5a.png`
- **Purpose**: Delhi-Ghaziabad-Meerut corridor map

### 4. **Facility Images** (5 images)
- **Used in**: Facilities Section
- **Figma IDs**:
  - `0f6f3b0cda38ed8e0e7e002e3f6e7f3c17be5a6f.jpg` - Facility 1
  - `21feb948fc2b2285d63d8e0cd8aa9077c26c9e12.jpg` - Facility 2
  - `88c86fb6de1a862e8f54fa3d59befd0d8de15f49.jpg` - Facility 3
  - `f5bad91d5e3f3c5e4bbd80cfc25f38f95e5f81c0.jpg` - Facility 4
  - `4b8c52ad4bda72950f948fac5a33a4a6e30eb09a.jpg` - Facility 5

---

## 🎯 How Images Are Handled

### In Figma Make Environment

Images are imported using the special `figma:asset` protocol:
```tsx
import logo from 'figma:asset/ef2381e67a01993bc3e64608d41a297647c090de.png';
```

### When You Download

When you download from Figma Make, it automatically:
1. ✅ Converts all `figma:asset` imports to regular imports
2. ✅ Downloads all images to the correct folders
3. ✅ Updates all import paths in your code
4. ✅ Optimizes images for web

**You don't need to do anything!** The download handles everything automatically.

---

## 📁 Recommended Folder Structure

After download, your assets should be organized like this:

```
ncrtc-website/
├── public/
│   └── assets/
│       ├── logo.png
│       ├── train-hero.png
│       ├── route-map.png
│       └── facilities/
│           ├── facility-1.jpg
│           ├── facility-2.jpg
│           ├── facility-3.jpg
│           ├── facility-4.jpg
│           └── facility-5.jpg
└── components/
    └── ... (your components)
```

---

## 🔧 If Images Are Missing

### Option 1: Re-download from Figma Make
The easiest solution - just re-download your project.

### Option 2: Manual Asset Setup

If you need to manually add assets:

1. **Create folders:**
   ```bash
   mkdir -p public/assets/facilities
   ```

2. **Add your images** to these folders

3. **Update imports** in components:

   **Header.tsx & Footer.tsx:**
   ```tsx
   import logo from '/assets/logo.png';
   ```

   **HeroSection.tsx:**
   ```tsx
   import trainImage from '/assets/train-hero.png';
   ```

   **RouteMapSection.tsx:**
   ```tsx
   import routeMapImage from '/assets/route-map.png';
   ```

   **FacilitiesSection.tsx:**
   ```tsx
   import facility1 from '/assets/facilities/facility-1.jpg';
   import facility2 from '/assets/facilities/facility-2.jpg';
   // ... etc
   ```

---

## 🖼️ Image Optimization Tips

### For Best Performance:

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Target: 70-80% quality

2. **Use Modern Formats**
   - Convert to WebP for smaller file sizes
   - Keep PNG/JPG as fallback

3. **Responsive Images**
   - Already handled by Tailwind CSS classes in the code
   - Images auto-scale on mobile

4. **Lazy Loading**
   - Use `loading="lazy"` attribute (already implemented)

---

## 🎨 Adding New Images

### Step 1: Add to public folder
```bash
# Add to public/assets/
cp my-new-image.png public/assets/
```

### Step 2: Import in component
```tsx
import myImage from '/assets/my-new-image.png';
```

### Step 3: Use in JSX
```tsx
<img src={myImage} alt="Description" />
```

---

## 🔍 Troubleshooting Images

### Images not loading in development

**Check:**
1. ✅ Files are in `public` folder
2. ✅ Import path starts with `/` (e.g., `/assets/logo.png`)
3. ✅ File extensions match exactly (case-sensitive)
4. ✅ Restart dev server after adding new files

```bash
# Restart dev server
npm run dev
```

### Images not loading in production

**Check:**
1. ✅ Images are included in build (`dist` folder)
2. ✅ No 404 errors in browser console
3. ✅ Image paths are correct (no absolute URLs)
4. ✅ Vite config has correct `base` path

### Images look pixelated

**Solution:**
- Use higher resolution images (2x or 3x)
- Tailwind handles responsive sizing automatically

---

## 📊 Image Sizes Reference

| Image Type | Recommended Size | Format |
|-----------|-----------------|--------|
| Logo | 200x100px | PNG |
| Hero Image | 1920x1080px | JPG/WebP |
| Route Map | 1200x800px | PNG |
| Facility Photos | 800x600px | JPG/WebP |

---

## 🌐 Using External Images

Want to use images from URLs instead?

```tsx
// Instead of importing
<img 
  src="https://example.com/image.jpg" 
  alt="Description"
/>
```

**Note:** External images require internet connection to load.

---

## 🎭 Placeholder Images

For testing without real images:

```tsx
// Use placeholder service
<img 
  src="https://via.placeholder.com/800x600?text=Coming+Soon" 
  alt="Placeholder"
/>
```

---

## ✅ Asset Checklist

Before deploying:
- [ ] All images download with project
- [ ] No broken image icons in browser
- [ ] Images load on mobile
- [ ] Images work in both light/dark mode
- [ ] File sizes are optimized (< 500KB each)
- [ ] Alt text added for accessibility

---

## 🆘 Still Having Issues?

1. Check browser console for 404 errors
2. Verify file paths match exactly
3. Clear browser cache (Ctrl+Shift+R)
4. Rebuild project: `npm run build`
5. Check [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)

---

**Images are crucial for your website's look and feel. Take time to get them right!**

Made with ❤️ by [ARPIT GOVIL](https://github.com/arpitgovil)
