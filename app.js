const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/**modulos de grapqhl */
const expressGrapqhl = require('express-graphql')
const { buildSchema } = require('graphql')
const { importSchema } = require('graphql-import')
const { ingrediente, pizza, pizzaId } = require('./resolvers')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




/**construccion del schema */


const typeDef = importSchema('./schema.graphql')
const schema = buildSchema(typeDef)


const root = {
    ingrediente,
    pizza,
    pizzaId
}


/**construyendo la ruta */

app.use('/graphql', expressGrapqhl({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('server on port 3000');
})