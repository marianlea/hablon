# Hablon

**Hablon** is a mobile-first product discovery platform designed to help local Filipino vendors, especially small-scale makers, farmers, and artisans, showcase their products online. Built with simplicity, speed, and accessibility in mind, Hablon is focused on connecting local producers directly with interested buyers.

This is **not a marketplace**. Buyers do not purchase products in the app. Instead, they browse listings and contact vendors directly to arrange payments or meetups.

## 🎯 Why Hablon?

In many communities across the Philippines, small producers rely on word-of-mouth or physical markets to sell their goods. Hablon aims to give them an accessible online presence, without requiring expensive setups or complex tools.

The name _Hablon_ is inspired by traditional weaving, symbolizing connection, craftsmanship, and local roots.

Many of the vendors I want to empower rely primarily on mobile phones and often have limited data connections. Because of this, I’m designing Hablon with a **mobile-first, low-bandwidth approach** to ensure the app is fast, accessible, and easy to use even in areas with unstable or slow internet.

My goal is to help these communities preserve traditional crafts, build sustainable livelihoods, and reach customers without relying on middlemen.

## 💡 Motivation

I built Hablon as my capstone full-stack project because I wanted to create something meaningful beyond just technical practice. Growing up in the Philippines, I saw how many small producers — broom makers, farmers, weavers — struggled to sell their products fairly, often relying on middlemen who take most of the profit.

Hablon is my way of combining my passion for technology with a purpose-driven project: helping local producers showcase their work, reach customers directly, and preserve traditions in a digital age. It reflects my belief that tech can and should be used to empower communities.

## 🛠️ Features (In Progress)

- **🪡 Vendor profiles** — showcase products, photos, contact info, and location
- **🔍 Product feed**— browse listings by category or tag
- **💬 Direct contact** — no in-app payments; buyers reach out directly to vendors
- **⭐ Favorites** — signed-in users can save products/vendors they love
- **✏️ Product management** — vendors can create and update products via a reusable form component with prefilled data for editing

## 🔧 Tech Stack

- **Frontend:** ReactJS (mobile-first, component-based design)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose for schema modeling)
- **Authentication & Security:**
  JWT-based authentication
  Password hashing & salting with bcrypt
- **Hosting:** TBD

## 🔮 Future Features

- **📱 Refined mobile experience** — lightweight design with offline-friendly strategies
- **🌱 Low-bandwidth focus** — optimized images, efficient API calls, minimal dependencies
- **🔎 Search & filtering** — for products and vendors
- **📊 Vendor dashboards** — insights into products and engagement

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

- Expand backend API for vendor & product management
- Improve user experience for favoriting products/vendors
- Add loaders, redirects, and smoother navigation flows
- Deploy to production with optimizations for low-bandwidth users
