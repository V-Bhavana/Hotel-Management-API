const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Chiklie@2003",
    port: 5432,
    database: "postgres",
});

module.exports = pool;
