# MYASTO (Asto Gear)

A full-stack e-commerce platform with seller features, authentication, OAuth, product management, multi-language support, and demo payment flow.

🚧 **Status:** Active Development | Started October 2025

---

## Table of Contents

* [Project Overview](#project-overview)
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Environment Variables](#environment-variables)
* [Getting Started](#getting-started)
* [API Endpoints](#api-endpoints)
* [Development Timeline](#development-timeline)
* [TODOs & Roadmap](#todos--roadmap)

---

## Project Overview

MYASTO is an e-commerce application allowing sellers to manage products and buyers to browse and purchase items with a complete shopping cart system.

* `backend/` — Node.js + Express API, Sequelize ORM, authentication, OAuth, product management
* `frontend/` — React + Vite client with Seller and Buyer flows, localization

---

## Tech Stack

* **Backend:** Node.js, Express, Sequelize, MySQL, JWT, Passport (OAuth)
* **Frontend:** React + Vite, React Router
* **Database:** MySQL
* **Payment:** Demo/sandbox integration
* **Language:** Google Cloud Translate API
* **File Upload:** Multer + Cloudinary

---

## Folder Structure
myasto/
├─ backend/
│  ├─ config/           # Database & Sequelize config
│  ├─ controllers/      # Auth, product, payment, category, brand, order controllers
│  ├─ mail/             # Email templates & services
│  ├─ middleware/       # authenticate.js, authorizeRoles.js, uploadImage.js, uploadVideo.js
│  ├─ models/           # Sequelize models (User, Product, Category, Brand, Order)
│  ├─ repositories/     # Data access layer
│  ├─ routes/           # auth.routes.js, product.routes.js, category.routes.js, brand.routes.js, order.routes.js
│  ├─ utils/            # Helper functions
│  ├─ .env              # Environment variables (DO NOT COMMIT)
│  ├─ .env.example      # Environment template
│  ├─ server.js         # Entry point
│  └─ package.json
├─ frontend/
│  ├─ context/          # React Context for state management
│  ├─ public/           # Static assets
│  ├─ src/              # React components & pages
│  ├─ utils/            # Frontend utilities
│  ├─ vite.config.js    # Vite configuration (proxy setup)
│  └─ package.json
├─ languages/           # Localization files
├─ .gitignore
└─ README.md

---

## Environment Variables

Create `backend/.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=asto_gear_db
NODE_ENV=development
JWT_SECRET=your_jwt_secret

MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret

GOOGLE_TRANSLATE_API_KEY=your_google_api_key
⚠️ NEVER commit .env to GitHub! Use .env.example as template.

Getting Started
Prerequisites

Node.js (v16 or higher)
MySQL
npm or yarn

Installation

Clone the repository

bashgit clone https://github.com/SeYz-GHB/myasto.git
cd myasto

Setup Backend

bashcd backend
npm install

Configure Database


Create a MySQL database
Copy .env.example to .env and fill in your credentials
Run migrations:

bashnpx sequelize-cli db:migrate

Setup Frontend

bashcd ../frontend
npm install
Running the Application
Backend:
bashcd backend
npm run dev
Runs on: http://localhost:5000
Frontend:
bashcd frontend
npm run dev
Runs on: http://localhost:5173

API Endpoints
Authentication (/api/auth)
MethodEndpointAccessDescriptionPOST/signupPublicUser registrationPOST/loginPublicUser loginPOST/check-emailPublicCheck email availabilityPOST/googlePublicGoogle OAuthPOST/forgot-passwordPublicRequest password resetPOST/reset-passwordPublicReset passwordPOST/verify-emailProtectedVerify emailPOST/resend-verificationProtectedResend verificationPOST/logoutPublicUser logoutGET/whoamiProtectedGet current user
Categories (/api/category)
MethodEndpointAccessDescriptionPOST/upload-categoryAdmin/SellerCreate categoryGET/view-all-categoriesPublicList all categoriesPATCH/update-category/:idAdmin/SellerUpdate categoryDELETE/delete-categories/:idAdmin/SellerDelete category
Brands (/api/brand)
MethodEndpointAccessDescriptionPOST/category/:category_slug/upload-brandAdmin/SellerCreate brandGET/view-all-brandsPublicList all brandsGET/category/:category_slug/brandsPublicGet brands by categoryPATCH/update-brand/:idAdmin/SellerUpdate brandDELETE/delete-brand/:idAdmin/SellerDelete brand
Products (/api/product)
MethodEndpointAccessDescriptionPOST/single_productAdmin/SellerCreate productGET/PublicList all productsGET/:idPublicGet product by IDGET/detail/:idPublicGet product detailsGET/category/:category_slug/brand/:brand_slugPublicFilter productsPUT/edit/:idAdmin/SellerUpdate productDELETE/delete/:idAdmin/SellerDelete product
Orders (/api/order)
MethodEndpointAccessDescriptionPOST/CustomerCreate order

Development Timeline

Week 1: Database setup, Sequelize integration, Frontend-Backend connection
Week 2-4: Authentication system (Signup, Login, Password Reset, Email Verification)
Week 5: Google OAuth integration
Week 6-8: Seller dashboard (Category, Brand, Product CRUD operations)
Week 9: Client-side design (Homepage, Cart, Payment demo)
Week 10: Multi-language integration (Khmer, English, Chinese)


TODOs & Roadmap

 Add automated tests (Jest)
 Implement admin dashboard
 Add pagination & search filters
 Real payment gateway integration
 Complete order management system
 Product reviews & ratings
 Email verification completion
 Mobile responsive optimization
 Inventory management
 Sales analytics


👤 Author
SeYz-GHB
GitHub: @SeYz-GHB

