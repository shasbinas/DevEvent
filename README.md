<div align="center">
  <br />
    <a href="https://github.com/shasbinas/DevEvent" target="_blank">
     
  <br />

  <h1>DevEvent</h1>

  <h3>The Hub for Every Developer Event</h3>

  <p>
    Discover, Create, and Book technical events. <br />
    Hackathons, Meetups, and Conferences — all in one place.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

<br />

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

---

## 🚀 Introduction

**DevEvent** is a modern, full-stack platform built to bridge the gap between event organizers and developer communities. Whether you're looking to host a hackathon or attend a local tech meetup, DevEvent provides a seamless experience for managing events and booking tickets.

Built with performance and aesthetics in mind, using the latest **Next.js 16** and **Tailwind CSS v4** for a lightning-fast, beautiful user interface.

---

## ✨ Key Features

- **🔍 Discover Events**: Browse a curated feed of events with advanced filtering by type (Online/Offline/Hybrid) and category.
- **🏷️ Smart Recommendations**: Find "Similar Events" powered by tag-based algorithms.
- **🎫 Seamless Booking**: Integrated booking system for instant ticket reservations.
- **📅 Event Management**: Organizers can create detailed event pages with rich text descriptions, agendas, and image uploads.
- **☁️ Cloudinary Integration**: Optimized image handling for fast loading visuals.
- **📱 Fully Responsive**: A mobile-first design that looks great on any device.
- **🖌️ Modern UI**: Glassmorphism effects, smooth animations, and a polished dark-themed aesthetic.

---

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React, Framer Motion |
| **Backend** | Server Actions, Next.js API Routes, Node.js |
| **Database** | MongoDB (via Mongoose ODM) |
| **Authentication** | (Planned/In-progress) |
| **Services** | Cloudinary (Images), PostHog (Analytics) |
| **Tools** | TypeScript, ESLint, Turbopack |

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** (Local or Atlas URI)
- **Cloudinary Account** (For image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shasbinas/DevEvent.git
   cd DevEvent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/devevent

   # App Config
   NEXT_PUBLIC_BASE_URL=http://localhost:3000

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📂 Project Structure

```bash
📦 DevEvent
├── 📂 app                 # Next.js App Router pages & layouts
│   ├── 📂 api             # API Routes
│   ├── 📂 events          # Event details pages
│   └── 📄 page.tsx        # Landing page
├── 📂 components          # Reusable UI components
├── 📂 database            # Mongoose models (Event, Booking)
├── 📂 lib                 # Utilities & Server Actions
│   ├── 📂 actions         # Data mutation logic
│   └── 📄 mongodb.ts      # DB connection helper
├── 📂 public              # Static assets
└── 📄 tsconfig.json       # TypeScript configuration
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <p>Star ⭐ this repository if you find it useful!</p>
  <p>Built with ❤️ by Shasbin AS</p>
</div>
