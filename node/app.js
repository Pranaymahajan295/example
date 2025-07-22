// Import necessary modules
const express = require("express"); // Import the Express.js framework
const cors = require("cors");     // Import the CORS middleware

// Initialize the Express application
const app = express();

// --- Middleware ---
// Enable CORS for all routes and origins
// This allows your frontend (e.g., the HTML page you provided) to make requests to this server
app.use(cors());

// Enable Express's built-in JSON body parser
// This middleware parses incoming request bodies with JSON payloads
// and makes the parsed data available on req.body
app.use(express.json());

// --- Data Storage (for demonstration purposes) ---
// Initialize student data. Using 'let' so it can be modified.
let studentData = [
  { id: 1, name: "Ayush M", message: "Hello world" },
  { id: 2, name: "Riya R", message: "Hii Ayush sorry for late reply" },
  { id: 3, name: "Suhani M", message: "Javascript" }
];

// Simple ID counter for new students
let nextId = studentData.length > 0 ? Math.max(...studentData.map(s => s.id)) + 1 : 1;

// --- Routes ---

// GET /students - Get all students
// Defines a GET endpoint at the path "/students"
app.get("/students", (req, res) => {
    // Send the entire studentData array as a JSON response
    res.json(studentData); // res.json() automatically sets Content-Type to application/json
});

// POST /student - Add a new student
// Defines a POST endpoint at the path "/student"
app.post("/student", (req, res) => {
    // The parsed JSON body is available on req.body thanks to express.json() middleware
    const newStudent = {
        id: nextId++, // Assign a new unique ID
        name: req.body.name,
        subject: req.body.subject, // Assuming your HTML will send 'subject'
        grade: req.body.grade      // Assuming your HTML will send 'grade'
    };

    // Add the new student to our in-memory array
    studentData.push(newStudent);

    // Send a 201 Created status and the new student object as JSON
    res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// GET /student/:id - Get a single student by ID
// This route uses a URL parameter ':id' to capture the student's ID
app.get("/student/:id", (req, res) => {
    // Access the ID from req.params
    const studentId = parseInt(req.params.id); // Convert the ID to an integer

    // Find the student in the array
    const student = studentData.find(s => s.id === studentId);

    if (student) {
        // If student is found, send it as JSON
        res.json(student);
    } else {
        // If not found, send a 404 Not Found status with a message
        res.status(404).send("Student not found");
    }
});

// --- Server Start ---
// Define the port the server will listen on
const PORT = 3200;

// Start the Express server
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});