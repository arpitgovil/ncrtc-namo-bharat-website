# ⚡ Quick Start Guide

Get your NCRTC website live in **5 minutes**!

---

## 🎯 Choose Your Path

### Path A: I want it online NOW! 🚀
→ Go to [Deploy with Vercel](#deploy-with-vercel-2-minutes)

### Path B: I want to code locally first 💻
→ Go to [Local Development](#local-development-5-minutes)

---

## 🚀 Deploy with Vercel (2 minutes)

### Step 1: Download from Figma Make
Click the **Download** button in Figma Make to get your ZIP file.

### Step 2: Extract & Upload to GitHub

```bash
# Extract ZIP and navigate to folder
cd ncrtc-website

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on github.com, then:
git remote add origin https://github.com/arpitgovil/ncrtc-website.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **Sign up** → **Continue with GitHub**
3. Click **Add New** → **Project**
4. Select your `ncrtc-website` repository
5. Click **Deploy**

⏱️ Wait 1 minute...

🎉 **LIVE!** Your URL: `https://ncrtc-website.vercel.app`

**That's it!** Every time you push to GitHub, Vercel automatically updates your site.

---

## 💻 Local Development (5 minutes)

### Step 1: Download & Extract
Download from Figma Make and extract the ZIP.

### Step 2: Install Dependencies

```bash
cd ncrtc-website
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser!

### Step 4: Make Changes
Edit any file in the `components` folder, and the browser auto-updates!

### Step 5: Upload to GitHub (when ready)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/arpitgovil/YOUR-REPO-NAME.git
git push -u origin main
```

Then deploy using Vercel (see Path A above)!

---

## 🎨 What You Can Customize

| File | What it controls |
|------|-----------------|
| `/components/Header.tsx` | Navigation bar |
| `/components/HeroSection.tsx` | Top banner with train |
| `/components/RouteMapSection.tsx` | Journey planner & map |
| `/components/Footer.tsx` | Bottom section |
| `/styles/globals.css` | Colors & fonts |

---

## 🆘 Need Help?

### Common Issues:

**"npm not found"**
→ Install Node.js from [nodejs.org](https://nodejs.org)

**"Module not found"**
→ Run `npm install`

**"Build failed"**
→ Delete `node_modules` folder, run `npm install` again

**Images not loading**
→ Check that all image files were included in download

---

## 📚 More Resources

- **Full setup guide**: See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- **Deployment options**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Project details**: See [README.md](./README.md)

---

## ✅ Success Checklist

- [ ] Downloaded project from Figma Make
- [ ] Ran `npm install`
- [ ] Development server works (`npm run dev`)
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel/Netlify
- [ ] Website is live! 🎉

---

## 🌐 Your Live Site

Once deployed, you'll have:
- ✨ A custom URL (e.g., `ncrtc-website.vercel.app`)
- 🔄 Auto-updates on every git push
- 📱 Mobile-responsive design
- 🌓 Dark mode toggle
- 🚂 Interactive fare calculator
- ⚡ Lightning-fast loading

---

## 🎊 Celebrate!

Share your website:
- Tweet it: "Just built an NCRTC website! Check it out: [your-url]"
- Add to your portfolio
- Share on LinkedIn
- Add to your GitHub profile README

---

**Made with ❤️ by [ARPIT GOVIL](https://github.com/arpitgovil)**

Now go make it live! 🚀
