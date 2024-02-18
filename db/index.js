const { Pool } = require('pg'); // Assuming PostgreSQL

// Database connection pool
const pool = new Pool({
    user: 'your_db_user',
    host: 'your_db_host',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 'your_db_port',
  });

  module.exports = pool;
