Candidate Management System

A full-stack application to manage candidates with functionalities to add, edit, view, and delete candidates. It includes a React frontend and a Node.js/Express backend connected to a MySQL database, along with Swagger API documentation.

Table of Contents

Features

Technologies Used

Project Structure

Backend Setup

Environment Variables

Install Dependencies

Run Server

API Documentation

Frontend Setup

Install Dependencies

Run Frontend

Unit Testing

Folder Structure

Future Improvements

Features

View all candidates in a table.

Add new candidates with details: name, email, phone number, status, and resume link.

Edit existing candidate details.

Delete candidates.

RESTful API endpoints.

Swagger API documentation.

Unit tests for frontend components and backend endpoints.

Technologies Used

Frontend:

React.js

React Router

CSS / Bootstrap

Backend:

Node.js

Express.js

MySQL

Swagger (OpenAPI 3.0)

Testing:

Jest

React Testing Library

Supertest (for backend testing)

Project Structure
candidate-management-system/
│
├── backend/
│   ├── controllers/
│   │   └── candidateController.js
│   ├── models/
│   │   └── candidateModel.js
│   ├── routes/
│   │   └── candidateRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── swagger.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CandidateForm.js
│   │   │   └── CandidateList.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
│
└── README.md

Backend Setup
Environment Variables

Create a .env file in the backend folder:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=candidate_db
PORT=5000


Replace your_password with your MySQL password.

Install Dependencies
cd backend
npm install


Dependencies include:

express

mysql2

body-parser

cors

dotenv

swagger-jsdoc

swagger-ui-express

nodemon (for development)

Run Server
npm start


Server runs on http://localhost:5000.

Default API route: http://localhost:5000/

Swagger docs: http://localhost:5000/api-docs

API Documentation (Swagger)

Swagger UI automatically generates documentation for your endpoints.

Example endpoints:

GET /api/candidates → Get all candidates

POST /api/candidates → Add a new candidate

PUT /api/candidates/:id → Update candidate by ID

DELETE /api/candidates/:id → Delete candidate by ID

Frontend Setup
Install Frontend Dependencies
cd frontend
npm install

Run Frontend
npm start


Frontend runs on http://localhost:3000.

Navigation:

/ → Candidate List

/add → Add Candidate Form

/edit/:id → Edit Candidate Form

Frontend connects to backend API running on http://localhost:5000/api/candidates.

Unit Testing
Frontend

Uses Jest and React Testing Library.

Tests individual components and form functionality.

Example: CandidateForm.test.js

Check input fields render correctly.

Test state changes when input changes.

Mock API call to verify POST request.

Run frontend tests:

npm test

Backend (Optional)

Use Jest + Supertest.

Test API endpoints for expected behavior.

Example: POST request adds a candidate, GET request retrieves candidates.

Folder Structure Explanation

Backend:

server.js → Main server entry point.

controllers/ → Handle API logic.

models/ → Database queries.

routes/ → Route definitions.

swagger.js → API documentation setup.

config/db.js → MySQL database connection.

Frontend:

components/ → React components for UI.

App.js → Routes setup.

index.js → Main render file.

Future Improvements

Add authentication for admin and users.

Integrate Redux for state management.

Add pagination and search for candidate list.

Add file upload for resumes instead of URLs.

Add backend validation for form inputs.