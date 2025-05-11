const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password'  // Replace with your MySQL root password
});

// Step 1: Create the Database
connection.query(`CREATE DATABASE IF NOT EXISTS EmployeeDB`, (err) => {
  if (err) throw err;
  console.log('✅ Database created or already exists.');

  // Step 2: Connect to the new database
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',  // Same password
    database: 'EmployeeDB'
  });

  // Step 3: Create the employee table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS employee (
      Eid INT PRIMARY KEY,
      Ename VARCHAR(100),
      Designation VARCHAR(100),
      Salary DECIMAL(10, 2)
    )
  `;

  db.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log('✅ Table "employee" created or already exists.');

    // Step 4: Insert 5 employees
    const insertQuery = `
      INSERT INTO employee (Eid, Ename, Designation, Salary)
      VALUES ?
    `;

    const employees = [
      [1, 'Alice Johnson', 'Software Engineer', 75000.00],
      [2, 'Bob Smith', 'Data Analyst', 68000.00],
      [3, 'Charlie Lee', 'Product Manager', 85000.00],
      [4, 'Diana Patel', 'UX Designer', 72000.00],
      [5, 'Ethan Clark', 'DevOps Engineer', 79000.00],
    ];

    db.query(insertQuery, [employees], (err, result) => {
      if (err) throw err;
      console.log(`✅ Inserted ${result.affectedRows} employees.`);
      db.end();
    });
  });
});