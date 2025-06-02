// server.js

const express = require("express");
const mysql2 = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "tarroza_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
        connection.release(); // Release the connection back to the pool
    }
});

// Add this route for development/testing purposes
app.get("/certificate/:registration_no", async (req, res) => {
    const { registration_no } = req.params;
    
    try {
        const [results] = await db.promise().query("SELECT * FROM certificate_of_registration WHERE registration_no = ?", [registration_no]);
        if (results.length === 0) {
            return res.status(404).json({ message: "Certificate not found" });
        }

        const certificate = results[0];

        if (certificate.student_img) {
            certificate.student_img = certificate.student_img.toString('base64');
        }

        // Parse array fields that are stored as comma-separated strings
        const multiValueFields = [
            'subject_code', 'subject_title', 'lec_units', 'lab_units',
            'credit_units', 'tuition_units', 'subject_section',
            'subject_schedule_room', 'subject_faculty'
        ];

        multiValueFields.forEach(field => {
            if (certificate[field] && typeof certificate[field] === 'string') {
                certificate[field] = certificate[field].split(',');
            }
        });

        res.json(certificate);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Database error" });
    }
});

app.listen(5000, () => {
    console.log("Server is running on Port 5000");
});
