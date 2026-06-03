<div align="center">

# 🌍 Desti-to-Destination

### Premium Travel Discovery & Booking Platform

*Bridging cinematic visual storytelling with seamless destination browsing and secure travel booking.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-destito--destination.vercel.app-06b6d4?style=for-the-badge)](https://destito-destination.vercel.app/)
&nbsp;
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
&nbsp;
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
&nbsp;
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Live Links](#-live-links)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [💡 Business Value & SEO](#-business-value--seo)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🚢 Production Deployment](#-production-deployment)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**Desti-to-Destination** is a high-performance, full-stack travel discovery and booking platform built for the modern explorer. Engineered with **Next.js 16**, **React 19**, and a decoupled **Express.js API backend**, the platform delivers a seamless, secure travel experience from browsing destinations to confirming bookings.

The client application leverages **HeroUI v3** and **Tailwind CSS v4** for a premium, responsive interface, while authentication is handled by the **Better Auth** ecosystem — supporting both Google OAuth and Email/Password logins through a **MongoDB Atlas** database. A dedicated Express.js server (`desti-to-destination-server`) acts as a secure API gateway managing destinations and booking data independently of the frontend.

---

## ❌ The Problem & ✅ The Solution

> **Travel platforms deserve seamless, secure, and beautiful experiences.**

Most travel booking apps are slow, visually uninspiring, and rely on insecure or clunky authentication flows that frustrate users before they even reach checkout.

| ❌ The Problem | ✅ Desti-to-Destination's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Generic travel templates with no visual identity | Cinematic **HeroUI v3** interface with smooth transitions and premium layout |
| Insecure or missing authentication | **Better Auth** ecosystem — Google OAuth + Email/Password + MongoDB session storage |
| Slow page loads ruining the discovery experience | **Next.js 16 App Router** with SSR for near-instant destination rendering |
| No separation between frontend and data layer | Decoupled **Express.js API gateway** (`desti-server`) managing all data routes |
| No mobile experience for travellers on the go | Fully responsive layout via **Tailwind CSS v4** across all breakpoints |
| Destinations hardcoded with no live data | MongoDB Atlas-backed dynamic catalog served via secure Express endpoints |

---

## 🚀 Live Links

* **Live Client App:** [https://destito-destination.vercel.app](https://destito-destination.vercel.app/)
* **Live API Backend:** [https://desti-server-virid.vercel.app](https://desti-server-virid.vercel.app/)

<br/>

<table>
  <tr>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=880&h=495&auto=format&fit=crop" alt="Desti-to-Destination Preview 1" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
    <td width="50%">
      <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=880&h=495&auto=format&fit=crop" alt="Desti-to-Destination Preview 2" width="100%" style="border-radius:8px;aspect-ratio:16/9;object-fit:cover" />
    </td>
  </tr>
  <tr>
    <td align="center"><sub>🌊 Cinematic Destination Discovery</sub></td>
    <td align="center"><sub>✈️ Premium Travel Booking Experience</sub></td>
  </tr>
</table>

---

## 💡 Business Value & SEO

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Next.js 16 SSR** | Instant indexing and optimal Core Web Vitals for travel SEO |
| **Decoupled Architecture** | Zero database keys exposed client-side; all data flows through the secure API |
| **Better Auth Integration** | Enterprise-grade authentication reduces friction at sign-up |
| **HeroUI v3 Design** | Premium component library delivers instant visual authority |

---

## 🚀 Key Features

- **🌍 Destination Catalog** — Browse a curated list of travel destinations served from a live MongoDB Atlas database via the Express API.
- **🔑 Secure Authentication** — Dual-mode login via **Better Auth**: Google OAuth 2.0 and Email/Password with MongoDB session management.
- **📅 Travel Booking** — Users can browse and book destinations through a clean, conversion-optimised UI flow.
- **🖥️ Admin Dashboard** — Admins can add, edit, and remove destination packages through protected routes.
- **⚡ Decoupled API Gateway** — High-speed Express.js server (`desti-to-destination-server`) handles all data operations independently.
- **📱 Fully Responsive** — Mobile-first layout built with Tailwind CSS v4 for every screen size.

---

## 📦 Tech Stack & Architecture

### Core Frontend Stack (`desti-to-destination`)

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Framework** | `next@16.2.6` (App Router) |
| **UI Component Library** | `@heroui/react@^3.0.4` + `@heroui/styles@^3.0.4` |
| **Styling** | `tailwindcss@^4` + `@tailwindcss/postcss@^4` |
| **Auth Engine** | `better-auth@^1.6.11` with `@better-auth/mongo-adapter` |
| **Database** | `mongodb@^7.2.0` (Atlas Integration) |
| **Notifications** | `react-toastify@^11.1.0` |
| **Icons** | `react-icons@^5.6.0` + `@gravity-ui/icons@^2.18.0` |

### Core Backend Stack (`desti-to-destination-server`)

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Engine & Router** | `express@^5.2.1` (Node.js runtime) |
| **Database Connector** | `mongodb@^7.2.0` (Atlas integration) |
| **Auth Verification** | `jose-cjs@^6.2.3` (JWT validation) |
| **Environment** | `dotenv@^17.4.2` |
| **CORS** | `cors@^2.8.6` |

---

## 🛠️ Installation & Setup

Desti-to-Destination operates on a dual-repo architecture: the **Next.js client** and the **Express.js backend**.

### 1. Clone the Workspace

```bash
git clone https://github.com/CoderGUY47/desti-to-destination.git
cd desti-to-destination
```

### 2. Setup Backend Server (`desti-to-destination-server`)

```bash
git clone https://github.com/CoderGUY47/desti-to-destination-server.git
cd desti-to-destination-server
npm install
```

Create a `.env` file inside `desti-to-destination-server`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

Run the server:

```bash
node index.js
```

### 3. Setup Frontend Client

```bash
cd desti-to-destination
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_32_character_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

Run the dev server:

```bash
npm run dev
```

Access at `http://localhost:3000`.

---

## 🚢 Production Deployment

* **Frontend (Next.js):** Deployed on **Vercel** — `destito-destination.vercel.app`
* **Backend (Express):** Deployed on **Vercel Serverless** — `desti-server-virid.vercel.app`

> ⚠️ **Important:** Ensure all environment variables (`MONGODB_URI`, `BETTER_AUTH_SECRET`, etc.) are added to the Vercel dashboard under **Project → Settings → Environment Variables** for both deployments.

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

*Join us in engineering the future of travel discovery!*

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>
