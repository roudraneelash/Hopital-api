Hospital API
This is a Node.js and MongoDB-based API for managing COVID-19 patients and their reports in a hospital. It provides functionality for doctors and patients to register, log in, and create/view reports.

Tech Stack
Node.js
Express.js
MongoDB
Prerequisites
Node.js (version >= 10.0.0)
MongoDB (running on default port 27017)

Installation
Clone the repository:

git clone <repository-url>
Install the dependencies:

cd hospital-api
npm install

Start the server:

npm start
By default, the server will start on http://localhost:8080.

API Endpoints
Doctors
POST /doctors/register: Register a new doctor. Requires a request body with username and password.

POST /doctors/login: Log in as a doctor. Requires a request body with username and password. Returns a JWT token for authentication.

Patients
POST /patients/register: Register a new patient. Requires a request body with phone and name. If the patient already exists, the existing patient information is returned.

POST /patients/:id/create_report: Create a report for a patient with the given id. Requires a request body with doctor, status, and date.

GET /patients/:id/all_reports: Get all reports of a patient with the given id. Reports are listed from oldest to latest.

Reports
GET /reports/:status: Get all reports of all patients filtered by a specific status.
Note: Routes that require authentication should include the JWT token in the Authorization header as a Bearer token.

Folder Structure
The project follows a scalable folder structure to separate models, controllers, and routes.

- models/
  - doctor.js
  - patient.js
  - report.js
- controllers/api/v1
  - doctors_controller.js
  - patients_controller.js
  - reports_controller.js
- routes/api/v1
  - doctors_route.js
  - patients_route.js
  - reports_route.js
- index.js
- README.md
  The models directory contains the Mongoose models for the Doctor, Patient, and Report schemas.
  The controllers directory contains the logic for handling requests and interacting with the models.
  The routes directory contains the route definitions for different API endpoints.
  The server.js file initializes the Express server and connects to the database.
  The .env file is used to store environment variables.
  The README.md file provides information on setting up the project.
  Feel free to modify the folder structure according to your requirements.

Additional Notes
This is a basic implementation of the Hospital API and can be further enhanced with additional features, error handling, validation, and security measures.
Make sure to secure the API endpoints and validate user inputs before storing them in the database.
You can use tools like Postman to test the API endpoints.
Refer to the code comments for detailed explanations of the implementation.
