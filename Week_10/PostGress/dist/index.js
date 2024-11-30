"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Create PostgreSQL client
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});
// Function to connect to the database
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log("Connected to PostgreSQL");
    }
    catch (err) {
        console.error("Connection error", err.message);
        process.exit(1);
    }
});
// Function to create the test table
const createtestTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
    CREATE TABLE IF NOT EXISTS test (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    try {
        yield client.query(query);
        console.log("test table created successfully.");
    }
    catch (err) {
        console.error("Error creating test table:", err.message);
    }
    // Insert data into the test table
    const insertQuery = "INSERT INTO test (username, email, password) VALUES ('harsh', 'user3@example.com', 'harsh123');";
    try {
        const res = yield client.query(insertQuery);
        console.log("Insertion success:", res);
    }
    catch (err) {
        console.error("Error during the insertion:", err.message);
    }
    // get user details-
    const getQuery = "SELECT * FROM test WHERE email='user3@example.com';";
    try {
        const res = yield client.query(getQuery);
        console.log("Data fetched successfullt", res.rows);
    }
    catch (error) {
        console.log("Error in fetching the data", error.message);
    }
});
// Main function to execute the steps
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase(); // Connect to the database
    yield createtestTable(); // Create the table and insert data
    yield client.end(); // Close the connection
    console.log("Disconnected from PostgreSQL");
});
main().catch((err) => console.error("Unexpected error:", err.message));
