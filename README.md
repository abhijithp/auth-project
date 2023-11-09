# Node.js Authentication App

This is a simple Node.js application that uses Express, Passport, bcrypt, and EJS to create a user authentication system. Users can register with an email and password, log in, and log out.

## Features

- User Registration
- User Login
- Password Hashing with bcrypt
- Session Management with express-session
- Authentication with Passport
- Flash Messages for Errors
- EJS for Templating

## Prerequisites

Before running this project, you will need to have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install the dependencies:

bash

npm install

Usage

To run the server:

bash

node server.js

By default, the server will start on port 3000. You can access the application by navigating to http://localhost:3000 in your web browser.
Configuration

If you wish to change any configurations such as the port number or session secret, you can modify the following lines in server.js:

javascript

const PORT = process.env.PORT || 3000;
app.use(session({ secret: 'secret_key', resave: false, saveUninitialized: false }));

Routes

    GET /: The home page that displays whether the user is logged in or not.
    GET /login: Displays the login form.
    POST /login: Handles the login logic.
    GET /register: Displays the registration form.
    POST /register: Handles the registration logic.
    POST /logout: Handles logging out the user.