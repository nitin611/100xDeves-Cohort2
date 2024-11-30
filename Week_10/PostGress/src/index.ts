import { Client } from "pg";

// Create PostgreSQL client
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});

// Function to connect to the database 
const connectToDatabase = async (): Promise<void> => {
  try {

    // make sure connection establish ho chuka hai - 
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (err) {
    console.error("Connection error", (err as Error).message);
    process.exit(1);
  }
};

// Function to create the test table
const createtestTable = async (): Promise<void> => {
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
    await client.query(query);
    console.log("test table created successfully.");
  } catch (err) {
    console.error("Error creating test table:", (err as Error).message);
  }

  // Insert data into the test table-
//   don't put directly values inside it because of sql injection attack-
// never take user provided values and pass it directly to the sql query - it will delete
// or sql injection will happen . 
// use $ syntax instead of this method-

  const insertQuery = "INSERT INTO test (username, email, password) VALUES ('harsh', 'user3@example.com', 'harsh123');";
  try {
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", (err as Error).message);
  }

  // get user details-
  const getQuery = "SELECT * FROM test WHERE email='user3@example.com';";
try {
    const res=await client.query(getQuery)
    console.log("Data fetched successfullt",res.rows)
} catch (error) {
    console.log("Error in fetching the data",(error as Error).message);
}
};



// Main function to execute the steps
const main = async (): Promise<void> => {
  await connectToDatabase();  // Connect to the database
  await createtestTable();   // Create the table and insert data
  await client.end();         // Close the connection
  console.log("Disconnected from PostgreSQL");
};

main().catch((err) => console.error("Unexpected error:", (err as Error).message));
