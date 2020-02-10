const pool = require('./database')

/**consultas */

const resolver = {}

resolver.ingrediente = async ({ id }) => {

    let resp = null

    if (id) {
        resp = await pool.query(`select * from ingredient where id=${id}`)

    } else {
        resp = await pool.query(`select * from ingredient`)
    }

    return resp.rows
}

resolver.pizza = async ({ name, id }) => {

    if (name || id) {

        let resp = null

        if (name) resp = await pool.query(`select * from pizza where name LIKE '${name}%' `)

        if (id) resp = await pool.query(`select * from pizza where id='${id}' `)



        return resp.rows
    } else {
        const resp = await pool.query(`select * from pizza`)
        return resp.rows
    }
}



module.exports = resolver 
module.exports = resolver
 module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver 
module.exports = resolver
module.exports = resolver 

