# MYASTO

A full-stack e-commerce platform with multi-language support and OAuth authentication.

## 🚀 Project Overview

MYASTO is an e-commerce application that allows sellers to manage products and buyers to browse, purchase items with a complete shopping cart system. The platform supports multiple languages (Khmer, English, Chinese) powered by Google Translation API.

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Proxy configuration for API calls
- Multi-language support (Google Translation API)

### Backend
- Node.js + Express
- Sequelize ORM
- Database: [MySQL/PostgreSQL - specify yours]
- OAuth 2.0 integration

## 📁 Project Structure


myasto/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── languages/         # Language configuration files
└── README.md

## ✨ Features

### Authentication System
- ✅ User signup
- ✅ User login
- ✅ Password reset functionality
- ✅ OAuth 2.0 integration

### Seller Dashboard
- ✅ Category management (CRUD)
- ✅ Brand management (CRUD)
- ✅ Product management (CRUD)

### Client Features
- ✅ Homepage with product listings
- ✅ Shopping cart functionality
- ✅ Payment processing (Demo)
- ✅ Multi-language support (Khmer, English, Chinese)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MySQL/PostgreSQL database

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SeYz-GHB/myAsto.git





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
