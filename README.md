
# EconoMe - React Financial Dashboard

## Project Overview

EconoMe is a financial management dashboard that enables users to manage their financial data, set goals, and track budgets. Built with a React frontend and FastAPI backend, EconoMe is a full-stack application that allows users to create, retrieve, update, and delete (CRUD) their data through an intuitive interface.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Using the API Requests](#using-the-api-requests)
- [Evaluation Criteria](#evaluation-criteria)

## Features

- **User Registration and Login**: Users can register and log in to access their financial dashboard.
- **Profile Management**: View and update personal details such as name, email, date of birth, and income.
- **Goal Setting and Budget Tracking**: Users can define financial goals and monitor budget usage.
- **Intuitive Interface**: Clear navigation and feedback for all actions within the dashboard.
- **Error Handling and Feedback**: User-friendly notifications for each API interaction, ensuring users are informed of the status of their actions.

## API Endpoints

### User Management Endpoints

- **Register a User**
  - **URL**: `POST /register`
  - **Request**: Sends a user’s details for registration.
  - **Request Body**:
    ```json
    {
      "user_id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "dob": "1990-01-01",
      "income": 50000
    }
    ```
  - **Example Screenshot**:
    ![POST Request - Register User](POST1.png)


### CRUD Endpoints for User Data

- **Get All Users**
  - **URL**: `GET /users`
  - **Request**: Fetches the user.
  - **Response**: Array of user objects.
  - **Example Screenshot**:
    ![GET Request - User](GET1.png)

- **Get User by ID**
  - **URL**: `GET /users/{user_id}`
  - **Request**: Fetches a specific user’s data using their user ID.
  - **Response**: User object if found.

- **Update User by ID**
  - **URL**: `PUT /users/{user_id}`
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "dob": "1990-01-01",
      "income": 60000
    }
    ```
  - **Description**: Updates details of a specific user.

- **Delete User by ID**
  - **URL**: `DELETE /users/{user_id}`
  - **Description**: Deletes a user from the system.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend
- [Python 3.8+](https://www.python.org/) and [FastAPI](https://fastapi.tiangolo.com/) for the backend
- MySQL database for user data storage

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nayalafifi/economeReact.git
   ```
2. **Navigate to the project directory and install dependencies:**
   ```bash
   cd economeReact
   npm install
   ```
3. **Start the frontend server:**
   ```bash
   npm start
   ```

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/izah2587/EconoMe.git
   ```
2. **Navigate to the project directory:**

    ```bash
    cd path/to/your-repository
    ```

3. **Set Up a Virtual Environment (Optional but Recommended)**

    ```bash
    python -m venv .venv
    ```

    **On Windows:**

    ```bash
    .venv\Scripts\activate
    ```

    **On macOS and Linux:**

    ```bash
    source .venv/bin/activate
    ```

4. **Install Required Packages**

    Once the virtual environment is activated, install the necessary dependencies from the `requirements.txt` file:

    ```bash
    pip install -r requirements.txt
    ```

5. **Set Up Your `.env` File**

    To securely store your MySQL database credentials, you need to set up a `.env` file in the root of the project directory:

    Create a new `.env` file in the project root:

    ```bash
    touch .env
    ```

    Open the `.env` file in a text editor and add your MySQL connection details in the following format:

    ```bash
    db_host=your_mysql_host
    db_user=your_mysql_username
    db_pass=your_mysql_password
    db_name=your_database_name
    ```

    Replace the placeholders with your actual MySQL connection details.


6. **Add `.env` to `.gitignore`**

    Ensure the `.env` file is excluded from version control by adding it to your `.gitignore` file. If you don't have a `.gitignore` file, create one and add the following line:

    ```bash
    .env
    ```

    This will prevent the `.env` file from being accidentally pushed to the repository.


4. **Start the FastAPI server:**

   ```bash
   uvicorn main:app --reload
   ```

### Running the Application

- Ensure both the frontend (`localhost:3000`) and backend (`localhost:8000`) servers are running.
- Access the application on your browser at `http://localhost:3000`.

## Using the API Requests

The frontend application sends HTTP requests to the backend API using the following methods:

1. **Register and Login (POST Requests)**:
   - When users fill out the registration form and submit it, a `POST` request is sent to the `/register` endpoint with the user's details.
   - The login form sends a `POST` request to `/login` for authentication.
   - **Screenshots**:
     - Registration Request:
       ![POST Request for Registration](POST1.png)
     - Login Request:
       ![POST Request for Login](POST2.png)

2. **Fetching Users (GET Requests)**:
   - The application fetches the list of all users using a `GET` request to `/users`.
   - When viewing a specific user profile, the app sends a `GET` request to `/users/{user_id}`.
   - **Screenshot**:
     ![GET Request for Users](GET1.png)

3. **Error Handling**:
   - The application includes error handling for scenarios like failed login or missing user data. Users are notified in the UI if an error occurs during an API request.

