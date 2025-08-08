
# 🧠 Subscription Management Backend

A secure and scalable backend system for managing user subscriptions — powered by **Express**, **MongoDB**, **Mongoose**, **Arcjet**, and **Upstash Workflows**.

This project provides robust JWT authentication, advanced bot protection, scheduled email reminders, and clean architectural patterns to support production-ready backend applications.

---

## 📚 Table of Contents

- [🧠 Introduction](#-introduction)
- [🚀 Tech Stack](#-tech-stack)
- [✨ Features](#-features)
- [🚀 Quick Start Guide](#-quick-start-guide)
- [📬 API Overview](#-api-overview)
- [🔐 Security](#-security)
- [🧠 Future Improvements](#-future-improvements)
- [📄 License](#-license)

---

## 🧠 Introduction

This project is a full-featured backend service for managing user subscriptions securely and efficiently. Whether you're building a SaaS product, membership system, or newsletter manager, this backend has you covered with reminders, authentication, and bot protection out of the box.

---

## 🚀 Tech Stack

| Tech        | Purpose                                       |
|-------------|-----------------------------------------------|
| Express.js  | Web framework for building REST APIs          |
| Mongoose    | MongoDB ODM for schema modeling               |
| Arcjet      | Security: Rate limiting, bot protection, auth |
| Upstash     | Redis + Workflows for email reminders         |
| JWT         | Stateless authentication                      |
| Nodemailer  | Sending email notifications                   |
| dotenv      | Environment variable management               |

---

## ✨ Features

- 👉 **Advanced Rate Limiting and Bot Protection**  
  Arcjet helps you secure your entire application with powerful protection against bots and abuse.

- 👉 **Database Modeling**  
  Define models and relationships using MongoDB and Mongoose for structured data handling.

- 👉 **JWT Authentication**  
  Implement secure authentication with full user CRUD operations and subscription management.

- 👉 **Global Error Handling**  
  Handle errors gracefully with centralized error middleware and input validation logic.

- 👉 **Logging Mechanisms**  
  Effective logging setup for better debugging and monitoring in development and production.

- 👉 **Email Reminders**  
  Automate intelligent subscription renewal reminders using Upstash Workflows.

- 🧩 **Clean Architecture & Reusability**  
  Modular folder structure and reusable code components to support scalable backend development.

---

## 🚀 Quick Start Guide

### 📦 Clone the Repo

```bash
git clone https://github.com/Yogesh-720/Subscription-Management-Backend-System.git
cd Subscription-Management-Backend-System
```

### 📥 Install Dependencies

```bash
npm i
```

> ✅ Scaffolded using:  
> `npx express-generator --no-view --git`

### ⚙️ Set up `.env`

```bash
# Create a .env file and fill in the values
PORT=3000
MONGODB_URI=
JWT_SECRET=
ARCJET_SECRET=
ARCJET_PROJECT_ID=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
EMAIL_USER=
EMAIL_PASS=
```

### ▶️ Start the Server

```bash
npm run dev
```

Your backend will be running at `http://localhost:3000`.

---

## 📬 API Overview

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/auth/signup`     | Register a new user               |
| POST   | `/api/auth/login`      | Login and receive JWT token       |
| GET    | `/api/subscriptions`   | List all user subscriptions       |
| POST   | `/api/subscriptions`   | Create a new subscription         |
| PUT    | `/api/subscriptions/:id` | Update subscription              |
| DELETE | `/api/subscriptions/:id` | Cancel/delete a subscription     |

---

## 🔐 Security

- ✅ **Arcjet Middleware**: Auth + bot detection
- ✅ **JWT Tokens**: Stateless session management
- ✅ **Rate Limiting**: Brute-force protection
- ✅ **Input Validation**: Preventing bad requests

---

## 🧠 Future Improvements

- Stripe integration for subscription payments
- Admin dashboard for managing users/subs
- Webhooks support
- User analytics with Redis
- Integration with Resend (Transactional emails)

---

> Made with ❤️ by [Yogesh Saini](https://github.com/Yogesh-720)
