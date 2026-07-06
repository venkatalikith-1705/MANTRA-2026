# VentureOut Travels - MANTRA 2026 Summer School Assignment 1

A premium, modern, responsive, and SEO-optimized static Travel Website designed and developed as part of the MANTRA 2026 Summer School Assignment 1.

---

## 📌 Project Overview

- **Student Name:** [Your Name]
- **Registration / Roll Number:** [Your Roll Number]
- **Selected Website Topic:** Travel Website
- **Live Deployment Link:** [Your Netlify Link after deployment]
- **GitHub Repository Link:** [Your GitHub Link after upload]
- **Submission Date:** 2nd July 2026

---

## 🛠️ Tools & Technologies Used

- **HTML5:** Semantic architecture structure of all web pages.
- **CSS3:** Flexible page styling, variables, grid/flexbox positioning, custom card containers, transitions, and responsive media queries.
- **JavaScript:** Custom interactive slider, active navigation indicators, mobile navigation toggle drawer, destination card filtering system, collapsible FAQ accordions, contact/booking form validations, and full-screen gallery lightboxes.
- **Git & GitHub:** For source control and repository hosting.
- **Netlify:** For live server deployment.

---

## 📁 Directory Structure

```text
/
├── assets/                  # High-quality optimized graphics
│   ├── hero_beach.jpg       # Tropical beach resort view (Bali)
│   ├── hero_alps.jpg        # Winter lake cabin view (Swiss Alps)
│   ├── hero_kyoto.jpg       # Traditional cherry blossom temple (Kyoto)
│   └── hero_santorini.jpg   # Sunset domes cliff view (Santorini)
├── css/
│   └── style.css            # Responsive layout & theme variables stylesheet
├── js/
│   └── main.js              # Interactivity scripting file (form, accordion, filter, lightbox, slider)
├── index.html               # Home page
├── about.html               # About page
├── packages.html            # Travel Packages page
├── gallery.html             # Gallery page
├── contact.html             # Booking & Contact Enquiry page
└── README.md                # Submission Documentation
```

---

## ✨ Key Features & Interactivity

1. **Interactive Hero Image Slider (Home Page):** Slides cycle automatically every 6 seconds, featuring manual control arrows and dynamic indicators.
2. **Mobile Drawer Navigation Toggle:** Clickable hamburger button slides in/out a clean vertical navigation drawer menu on screens smaller than 768px.
3. **Interactive Package Sorting (Packages Page):** Fully functional category filter allows sorting packages by Beach, Adventure, or Cultural categories instantly.
4. **Interactive Accordion Accord (Packages Page):** Expandable/collapsible FAQ blocks showing smooth dropdown height animations.
5. **Dynamic Lightbox Overlay (Gallery Page):** Click any gallery image to trigger a fullscreen modal carousel backdrop. Cycle images using left/right arrows, exit with Escape key or Close button.
6. **Form Field Validation & Success Alert (Contact Page):** Real-time blur validation. Displays detailed alerts for invalid inputs, and a custom success modal pop-up overlay when a booking request is correctly completed.
7. **Smooth Scroll-to-Top:** A floating navigation button pops up after scrolling 400px, returning users smoothly to the top when clicked.

---

## 📈 Search Engine Optimization (SEO) Checklist Compliance

- [x] **Page Titles:** Unique, descriptive `<title>` tags containing primary keywords on all 5 HTML templates.
- [x] **Meta Descriptions:** Tailored descriptions detailing the content of individual pages to increase click-through rates.
- [x] **Meta Keywords:** Relevant tags targeting key travel phrases (e.g. `travel agency`, `vacation booking`, `Swiss Alps trekking`).
- [x] **Heading Hierarchy:** Exactly one `<h1>` per page representing the main heading, followed by sequentially nested `<h2>` and `<h3>` tags for sections.
- [x] **Descriptive Image Alt Text:** Meaningful descriptions for assistive readers on every single image.
- [x] **Clean Filenames:** Meaningful, lower-case, keyword-optimized filenames (`index.html`, `about.html`, `packages.html`, `gallery.html`, `contact.html`).

---

## 🚀 Deploying to GitHub & Netlify

### Step 1: Upload to GitHub
1. Create a new public repository on GitHub.
2. Open terminal inside the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of VentureOut Travels assignment"
   git branch -M main
   git remote add origin <your-github-repo-link>
   git push -u origin main
   ```

### Step 2: Deploy to Netlify
1. Log into your [Netlify](https://www.netlify.com/) account.
2. Click **Add new site** > **Import an existing project**.
3. Link your GitHub account and select your `VentureOut Travels` repository.
4. Leave build settings blank (as it is a static website, it does not require compile configurations).
5. Click **Deploy Site**.
6. (Optional) Go to **Site settings** > **Change site name** to personalize your Netlify live URL.
