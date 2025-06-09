const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,           // Cloud SQL username
  password: process.env.DB_PASS,       // Cloud SQL password
  database: process.env.DB_NAME,       // Database name
  host: process.env.DB_HOST,            // For Cloud Run: use unix socket
  port: 5432,
  // If using unix socket:
  // host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
});

module.exports = pool;
