# Next.js 14+ Headless WordPress Blog Module

A high-performance, SEO-friendly blog application built with Next.js (App Router) and Headless WordPress. This project demonstrates advanced data fetching strategies, global state management with Redux, and robust form handling.

## 🚀 Mandatory Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Form Handling:** Formik + Yup
- **Styling:** Tailwind CSS + @tailwindcss/typography
- **API:** WordPress REST API
- **Notifications:** React Toastify

## 🛠️ Features
- **ISR (Incremental Static Regeneration):** Blog posts are fetched on the server and revalidated every 60 seconds for optimal performance and SEO.
- **Dynamic Routing:** Individual blog pages are generated dynamically based on WordPress slugs.
- **Global Category Filter:** Managed via Redux, allowing users to filter posts without page reloads.
- **SEO Optimized:** Dynamic metadata generation for every post, including OpenGraph tags.
- **Responsive Design:** Mobile-first UI built with Tailwind's grid system.
- **Form Validation:** Contact form with real-time validation and success notifications.

## 📋 Prerequisites
- **Node.js:** v18.x or higher
- **WordPress:** Installed via XAMPP/LocalWP (PHP 8.4 recommended)
- **WordPress Permalinks:** Must be set to **"Post name"** (Settings > Permalinks).

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd blog-module
