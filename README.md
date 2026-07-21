# 🛒 E-Commerce Platform

A full-stack E-Commerce web application developed using the MERN Stack. The platform allows users to register, log in, browse products, add items to the cart, place orders, and simulate online payments. It also provides product management functionality for administrators.

---

## 🚀 Features

### 👤 User Features

- User Registration
- User Login (JWT Authentication)
- View Products
- Add Products to Cart
- Remove Products from Cart
- Place Orders
- View Order History
- Simulated Payment
- Logout

### 👨‍💼 Admin Features

- Add Products
- Update Products
- Delete Products
- Manage Product Catalog

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- BcryptJS

---

## 📂 Project Structure

```
E-Commerce-Platform
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── styles
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-link>
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Products

```
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Cart

```
GET    /api/cart
POST   /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id
```

### Orders

```
POST /api/orders
GET  /api/orders
```

### Payment

```
POST /api/payment
```

---

## 🔄 Application Workflow

1. Register/Login
2. Browse Products
3. Add Products to Cart
4. Checkout
5. Place Order
6. Payment Successful
7. View Orders

---

## 📷 Screens

- ## Login
  
  <img width="918" height="592" alt="image" src="https://github.com/user-attachments/assets/63ec2de8-ee40-4c87-b917-7c6c2faf885a" />

- ## Register
  <img width="938" height="742" alt="image" src="https://github.com/user-attachments/assets/413bccee-2401-4fbf-b986-9336bd97a084" />

- ## Products
  <img width="1398" height="663" alt="image" src="https://github.com/user-attachments/assets/e7374757-f2ab-49d5-9da6-687625f6a207" />

  
- ## Cart
  <img width="1387" height="467" alt="image" src="https://github.com/user-attachments/assets/9a62f806-4070-46ee-84a2-d0df5620978e" />

- ## Orders
  <img width="1268" height="717" alt="image" src="https://github.com/user-attachments/assets/deb23cd8-6a4f-43e7-8ee0-caa7fc93a417" />


---

## 🔮 Future Enhancements

- Real Payment Gateway (Stripe/Razorpay)
- Product Search
- Product Categories
- Wishlist
- Order Tracking
- User Profile


---

