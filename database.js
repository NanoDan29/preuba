
/**modulos para la base de datos */

const { Pool } = require('pg')


const pool = new Pool({
    user: "postgres",
    host: 'localhost',
    port: 5433,
    database: 'pizza',
    password: 'nanoDAN1997'
})




module.exports = pool