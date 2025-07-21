# Hablon

**Hablon** is a mobile-first product discovery platform designed to help local Filipino vendors, especially small-scale makers, farmers, and artisans, showcase their products online. Built with simplicity, speed, and accessibility in mind, Hablon is focused on connecting local producers directly with interested buyers.

This is **not a marketplace**. Buyers do not purchase products in the app. Instead, they browse listings and contact vendors directly to arrange payments or meetups.

## 🎯 Why Hablon?

In many communities across the Philippines, small producers rely on word-of-mouth or physical markets to sell their goods. Hablon aims to give them an accessible online presence, without requiring expensive setups or complex tools.

The name _Hablon_ is inspired by traditional weaving, symbolizing connection, craftsmanship, and local roots.

Many of the vendors I want to empower rely primarily on mobile phones and often have limited data connections. Because of this, I’m designing Hablon with a **mobile-first, low-bandwidth approach** to ensure the app is fast, accessible, and easy to use even in areas with unstable or slow internet.

My goal is to help these communities preserve traditional crafts, build sustainable livelihoods, and reach customers without relying on middlemen.

## 🛠️ Features (In Progress)

- ✅ **Mobile-first design** — optimized for users on smartphones and limited data plans
- 🪡 **Vendor profiles** — display your products, photos, contact info, and location
- 🔍 **Product feed** — browse listings by category or tag
- 💬 **No in-app payments** — buyers reach out directly to vendors
- ⭐ **Favorites (buyer-side)** — signed-in users can save vendors they love
- 🌱 **Low-bandwidth focus** — minimal dependencies, optimized image sizes, and efficient data fetching

## 🔧 Tech Stack

- **Frontend**: ReactJS, TailwindCSS / Material UI
- **Backend (in progress)**: Node.js + Express + MongoDB (MERN stack)
- **Authentication**: Coming soon (JWT-based for both vendors and buyers)
- **Hosting**: TBD

## 🚀 Getting Started

To run the project locally:

```bash
git clone <https://github.com/your-username/hablon.git>
cd hablon
npm install
npm start

```

Visit `http://localhost:3000` to explore the app.

## 🚧 Roadmap

- Complete backend API for vendor and product management
- Implement authentication and authorization
- Add search and filtering capabilities for products and vendors
- Build admin dashboard for vendor/content management
- Deploy to production with performance optimizations for low bandwidth users
