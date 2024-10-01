# User Registration

This project is a fullstack application that allows user registration, login, and listing. It uses Express, Prisma, MongoDB, and JWT for authentication, along with a React frontend and Tailwind CSS for user interaction and styling.

## Technologies Used

### Backend:
- **Node.js**
- **Express.js**
- **Prisma ORM**
- **MongoDB**
- **JWT (JSON Web Tokens)** for authentication
- **Bcrypt** for password hashing
  
### Frontend:
- **React.js** with Hooks
- **React Router** for routing
- **Tailwind CSS** for styling

## Features

### Backend:
- **User registration** with password hashing.
- **User login** with JWT token generation.
- **User listing** (private route, protected with JWT).
  
### Frontend:
- **Registration Page**: A form for registering new users.
- **Login Page**: User authentication with token generation.
- **User Listing Page**: Displays the list of registered users (only for authenticated users).

## How to Run the Project

### Prerequisites
- **Node.js** (v20)
- **MongoDB** (or MongoDB Atlas for cloud database)
- **Prisma ORM** configured for MongoDB
- Environment variables configured (.env)
  
### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/daianaadepaula/user-registration-api-node-jwt.git
   cd user-registration-api-node-jwt
   
2. Install backend and frontend dependencies:
   ```bash
   npm install

   
3. Start the server:
   ```bash
   npm run dev


   
