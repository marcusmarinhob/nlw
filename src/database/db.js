// Importing sqlite3 dependecies
const sqlite3 = require("sqlite3").verbose()

// Create database object
const db = new sqlite3.Database("./src/database/database.db")

// Use database object
db.serialize( () => {      
    // Create table
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // Insert data in the table

    // Consult data in the table

    // Remove data from the table
})