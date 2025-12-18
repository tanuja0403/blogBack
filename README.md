📝 Blog Backend API

A RESTful backend API for a blog platform built using Node.js, Express, Prisma ORM, and SQLite.
This project supports user authentication, blog post management, and comment functionality with secure access control and persistent database storage.

🚀 Features
👤 User Management

User registration with secure password hashing

User login with JWT-based authentication

Unique email enforcement

📝 Blog Posts

Create new blog posts

Read all blog posts

Update existing posts (only by the owner)

Delete posts (only by the owner)

💬 Comments

Add comments to blog posts

View comments for a specific post

Update comments (only by the owner)

Delete comments (only by the owner)

🔐 Security & Validation

Password hashing using bcrypt

JWT-based route protection

Authorization checks (owner-only access)

Input validation and proper error handling

🗄 Database

SQLite database for local storage

Prisma ORM for type-safe database access

Relational data modeling (Users ↔ Posts ↔ Comments)

Persistent storage across server restarts

🛠 Tech Stack

Backend: Node.js, Express.js

ORM: Prisma

Database: SQLite

Authentication: JSON Web Tokens (JWT)

Password Security: bcrypt

Environment Management: dotenv

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone <repository-url>
cd blog-backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory:

DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secure_jwt_secret"

4️⃣ Initialize Prisma & Database
npx prisma migrate dev --name init


This will:

Create the SQLite database

Apply database schema

Generate Prisma Client

▶️ Running the Server
npx nodemon src/app.js


Server will start at:

http://localhost:5000

🧪 Testing the API (Postman)
🔹 User Routes

POST /api/users/register

POST /api/users/login

🔹 Post Routes

POST /api/posts (Auth required)

GET /api/posts

PUT /api/posts/:id (Auth + Owner only)

DELETE /api/posts/:id (Auth + Owner only)

🔹 Comment Routes

POST /api/comments/:postId (Auth required)

GET /api/comments/:postId

PUT /api/comments/:id (Auth + Owner only)

DELETE /api/comments/:id (Auth + Owner only)

📌 Authorization Header (for protected routes):

Authorization: <JWT_TOKEN>

🔍 Viewing Database Data
Prisma Studio (Recommended)
npx prisma studio


Opens a browser-based UI

View Users, Posts, and Comments

Inspect relations visually

🧠 Design Highlights

RESTful API architecture

Clean separation of concerns (routes, controllers, middleware)

Secure authentication and authorization

Relational database modeling

Persistent local database using SQLite
