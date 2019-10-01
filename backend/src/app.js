import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jwt from 'express-jwt'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { resolvers } from '~@schema/resolvers'
;

(async () => {
	require('~@db')

	const app = express()

	const auth = jwt({
		secret: 'areallylongpassword',
		credentialsRequired: false
	})

	app.use(cors(), bodyParser.json(), auth)

	const server = new ApolloServer({
		typeDefs: importSchema('src/schema/typeDefs.graphql'),
		resolvers,
		context: ({ req, res }) => ({
			req,
			res,
			user: req.user
		})
	})

	server.applyMiddleware({ app })

	const port = process.env.port || 4000
	app.listen(port, () => console.log(`🚀  Schema is ready at http://localhost:${port}${server.graphqlPath}`))
})()
