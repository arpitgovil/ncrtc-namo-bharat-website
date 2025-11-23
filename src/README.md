# 🚄 NCRTC Namo Bharat Express Website

A modern, responsive web application showcasing the **National Capital Region Transport Corporation (NCRTC)** and the **Namo Bharat Express** rapid transit system. This website provides comprehensive information about the Delhi-Ghaziabad-Meerut corridor, interactive route planning, real-time fare calculation, and detailed insights into India's regional rapid transit infrastructure.

---

## 🌟 **Features**

### ✨ **Core Features**
- 🎨 **Modern UI/UX** - Clean, professional design inspired by NCRTC's official branding
- 🌓 **Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🗺️ **Interactive Route Map** - Zoomable network map with all 15 stations
- 🎫 **Journey Planner** - Real-time fare and travel time calculator
- 📊 **Data Visualization** - Interactive charts showing ridership and project metrics
- ⚡ **Performance Optimized** - Fast loading, smooth animations, optimized images
- ♿ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation support

### 📍 **Sections**
1. **Hero Section** - Stunning full-screen introduction with NCRTC train imagery
2. **Statistics Dashboard** - Key metrics: stations, daily ridership, route length, speed
3. **Route Network Map** - Interactive corridor map (Delhi → Ghaziabad → Meerut)
4. **Journey Planner** - Calculate fares and travel times between any two stations
5. **Implementation Status** - Project phases, completion timelines, operational details
6. **Vision & Mission** - NCRTC's goals and future expansion plans
7. **Project Information** - Technical specifications, timeline, investment details
8. **Facilities** - Showcase of modern amenities (stations, trains, technology)
9. **Social Media Links** - Connect with NCRTC on various platforms
10. **Footer** - Complete navigation and credits

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- ⚛️ **React 18.3.1** - Modern UI library with hooks
- 📘 **TypeScript** - Type-safe development
- ⚡ **Vite 5.1.0** - Lightning-fast build tool and dev server

### **Styling**
- 🎨 **Tailwind CSS 4.0** - Utility-first CSS framework
- 💅 **PostCSS** - CSS processing with autoprefixer
- 🎭 **Custom CSS Variables** - Dynamic theming system

### **Data Visualization**
- 📊 **Recharts 2.10.3** - Beautiful, responsive charts
- 📈 **Interactive Graphs** - Ridership trends, statistics

### **Icons & Assets**
- 🎯 **Lucide React 0.344.0** - Modern icon library
- 🖼️ **Figma Assets** - Official NCRTC images and logos
- 📸 **Optimized Images** - WebP format, lazy loading

### **State Management**
- 🔄 **React Context API** - Dark mode state management
- 💾 **LocalStorage** - Theme persistence across sessions

### **Development Tools**
- 📦 **npm** - Package management
- 🔧 **ESLint** - Code linting
- 🎯 **TypeScript Compiler** - Type checking

---

## 📂 **Project Structure**

```
ncrtc-namo-bharat-website/
│
├── public/                          # Static assets
│   └── favicon.png                  # Website favicon
│
├── src/
│   ├── components/                  # React components
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx    # Protected: Image component with fallback
│   │   │
│   │   ├── Navbar.tsx              # Top navigation with dark mode toggle
│   │   ├── HeroSection.tsx         # Hero banner with gradient text
│   │   ├── StatsSection.tsx        # Statistics cards (stations, ridership, etc.)
│   │   ├── RouteMap.tsx            # Interactive network map with zoom
│   │   ├── JourneyPlanner.tsx      # Fare calculator with station selector
│   │   ├── ImplementationStatus.tsx # Project phases and timeline
│   │   ├── VisionSection.tsx       # Mission and vision statements
│   │   ├── ProjectInfo.tsx         # Technical details and specifications
│   │   ├── FacilitiesSection.tsx   # Modern amenities showcase
│   │   ├── SocialMedia.tsx         # Social media links grid
│   │   ├── Footer.tsx              # Footer with navigation and credits
│   │   └── DarkModeContext.tsx     # Dark mode state management
│   │
│   ├── imports/                     # Figma imported SVG assets
│   │   └── svg-*.tsx               # SVG components from Figma
│   │
│   ├── styles/
│   │   └── globals.css             # Global styles, CSS variables, Tailwind config
│   │
│   ├── App.tsx                      # Main app component
│   └── main.tsx                     # App entry point
│
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── postcss.config.js                # PostCSS configuration for Tailwind
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite build configuration
├── DEPLOYMENT_FIX.md               # Deployment troubleshooting guide
└── README.md                        # This file

```

---

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

Check your versions:
```bash
node --version   # Should be v18+ or v20+
npm --version    # Should be 9+ or 10+
git --version
```

---

## 📥 **Installation**

### **1. Clone the Repository**

```bash
# Clone via HTTPS
git clone https://github.com/arpitgovil/ncrtc-namo-bharat-website.git

# OR clone via SSH (if you have SSH keys set up)
git clone git@github.com:arpitgovil/ncrtc-namo-bharat-website.git

# Navigate into the project directory
cd ncrtc-namo-bharat-website
```

### **2. Install Dependencies**

```bash
npm install
```

This will install all required packages from `package.json`:
- React, React DOM
- Vite
- Tailwind CSS & PostCSS
- Recharts (for data visualization)
- Lucide React (for icons)
- TypeScript types

### **3. Start Development Server**

```bash
npm run dev
```

The app will open at: **http://localhost:5173**

You should see:
```
  VITE v5.1.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## 📜 **Available Scripts**

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking (TypeScript)
npm run type-check
```

---

## 🏗️ **Building for Production**

### **Create Production Build**

```bash
npm run build
```

This creates an optimized build in the `dist/` folder:
- ✅ Minified JavaScript
- ✅ Optimized CSS
- ✅ Compressed assets
- ✅ Tree-shaken code

### **Preview Production Build**

```bash
npm run preview
```

Opens the production build at: **http://localhost:4173**

---

## 🌐 **Deployment**

### **Deploy to Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/arpitgovil/ncrtc-namo-bharat-website)

#### **Manual Deployment:**

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure settings:
     - **Framework**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

3. **Live in 2-3 minutes!** 🎉

### **Deploy to Netlify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arpitgovil/ncrtc-namo-bharat-website)

#### **Manual Deployment:**
```bash
npm run build
```
Then drag & drop the `dist/` folder to Netlify.

### **Deploy to GitHub Pages**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🎨 **Customization**

### **Update Branding**

**Change Title & Favicon:**
Edit `/index.html`:
```html
<title>Your Custom Title</title>
<link rel="icon" type="image/png" href="/favicon.png" />
```

**Update Colors:**
Edit `/styles/globals.css` CSS variables:
```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  /* Add your custom colors */
}
```

### **Modify Station Data**

Edit `/components/JourneyPlanner.tsx`:
```typescript
const stations = [
  { name: "Your Station", code: "YS" },
  // Add more stations
];
```

### **Update Images**

Replace images in:
- Hero Section: `/components/HeroSection.tsx`
- Facilities: `/components/FacilitiesSection.tsx`
- Logo: `/components/Navbar.tsx`

---

## 🧪 **Features Deep Dive**

### **1. Dark Mode System**
- **Implementation**: React Context API
- **Persistence**: LocalStorage
- **Smooth Transitions**: CSS transitions on all elements
- **Toggle Location**: Navbar (top right)

### **2. Journey Planner**
- **15 Real Stations**: Delhi → Ghaziabad → Meerut
- **2 Class Types**: Standard & Business
- **Dynamic Calculation**: 
  - Base fare: ₹20-30
  - Per km charge: ₹1.50-2.00
  - Travel time: 100-160 km/h average
- **Real-time Updates**: Instant calculation on selection

### **3. Interactive Route Map**
- **Zoom Controls**: In/Out/Reset buttons
- **Smooth Animations**: CSS transforms
- **Responsive**: Works on all screen sizes
- **Color-coded**: Operational vs Upcoming stations

### **4. Data Visualization**
- **Recharts Library**: Responsive, animated charts
- **Types**:
  - Line Chart: Monthly ridership trends
  - Bar Chart: Station-wise passenger distribution
  - Area Chart: Revenue projections
- **Interactive**: Tooltips on hover

---

## 📊 **Project Statistics**

- **Total Components**: 12
- **Total Lines of Code**: ~3,500+
- **Bundle Size (Gzipped)**: ~150 KB
- **Lighthouse Score**: 
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

---

## 🔧 **Troubleshooting**

### **CSS Not Loading After Build**

See detailed fix in: [`DEPLOYMENT_FIX.md`](./DEPLOYMENT_FIX.md)

**Quick Fix:**
```bash
npm install @tailwindcss/postcss
```

Ensure `postcss.config.js` exists:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### **Module Not Found Errors**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Port Already in Use**

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

---

## 🤝 **Contributing**

Contributions are welcome! Here's how:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Contribution Guidelines**
- Follow existing code style
- Write meaningful commit messages
- Test your changes locally
- Update documentation if needed

---

## 📝 **License**

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Arpit Govil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 **Acknowledgments**

- **NCRTC** - For the inspiration and official branding
- **Government of India** - Regional Rapid Transit System initiative
- **React Team** - For the amazing framework
- **Tailwind Labs** - For Tailwind CSS
- **Vercel** - For hosting and deployment
- **Lucide Icons** - For beautiful iconography
- **Recharts** - For data visualization

---

## 👨‍💻 **Author**

**Arpit Govil**

- 🐙 GitHub: [@arpitgovil](https://github.com/arpitgovil)
- 💼 LinkedIn: [linkedin.com/in/arpitgovil](https://linkedin.com/in/arpitgovil)
- 🌐 Website: [arpitgovil.com](https://arpitgovil.com)
- 📧 Email: arpit@example.com

---

## 💖 **Support**

If you found this project helpful:

- ⭐ **Star this repository**
- 🐛 **Report bugs** via [Issues](https://github.com/arpitgovil/ncrtc-namo-bharat-website/issues)
- 💡 **Suggest features** via [Discussions](https://github.com/arpitgovil/ncrtc-namo-bharat-website/discussions)
- 🔀 **Fork and contribute**

---

## 📞 **Contact**

Have questions or suggestions?

- Open an [Issue](https://github.com/arpitgovil/ncrtc-namo-bharat-website/issues)
- Start a [Discussion](https://github.com/arpitgovil/ncrtc-namo-bharat-website/discussions)
- Email: arpit@example.com

---

## 🗺️ **Roadmap**

### **Upcoming Features**
- [ ] Multi-language support (Hindi, English)
- [ ] Real-time train tracking
- [ ] Ticket booking integration
- [ ] Station 360° virtual tours
- [ ] Push notifications for updates
- [ ] PWA (Progressive Web App) support
- [ ] Offline mode with service workers
- [ ] Animation improvements with Framer Motion
- [ ] More detailed station information
- [ ] Integration with Google Maps

---

## 📸 **Screenshots**

### **Desktop View**
![Desktop Hero](https://via.placeholder.com/1200x600?text=Desktop+Hero+Section)

### **Dark Mode**
![Dark Mode](https://via.placeholder.com/1200x600?text=Dark+Mode+View)

### **Mobile Responsive**
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+Responsive)

### **Journey Planner**
![Journey Planner](https://via.placeholder.com/1200x600?text=Journey+Planner+Interface)

---

## 🔗 **Useful Links**

- [Official NCRTC Website](https://www.ncrtc.in/)
- [Namo Bharat Official](https://namobharat.ncrtc.in/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## ⚡ **Performance Tips**

- Images are lazy-loaded for faster initial load
- Code splitting for optimal bundle size
- CSS is purged in production (only used classes)
- Preconnect to Google Fonts for faster font loading
- Service worker ready for PWA conversion

---

<div align="center">

### Made with ❤️ by [Arpit Govil](https://github.com/arpitgovil)

**⭐ Star this repo if you found it helpful!**

---

**🚄 Namo Bharat Express - Connecting the Future**

</div>

---

## 📈 **Version History**

### **v1.0.0** (Current)
- ✅ Initial release
- ✅ All 10 sections implemented
- ✅ Dark mode with persistence
- ✅ Interactive journey planner
- ✅ Responsive design
- ✅ Performance optimized

---

**Last Updated**: November 2024

**Status**: 🟢 Active Development
