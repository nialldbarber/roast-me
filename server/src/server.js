import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { resolvers } from '~/schema/resolvers'

const startServer = async () => {	
	require('~/db')
	const app = express()
	const port = process.env.port || 4000
	
	const server = new ApolloServer({
		typeDefs: importSchema('src/schema/typeDefs.graphql'),
		resolvers,
		context: ({ req, res }) => ({ req, res })
	})

	server.applyMiddleware({ app })
	
	app.use(cors(), bodyParser.json())
	app.listen(port, () => console.log(`🚀  Schema is ready at http://localhost:${port}${server.graphqlPath}`))
}

startServer()
