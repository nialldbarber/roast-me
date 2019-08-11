import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers'; 

require('dotenv').config({ path: '.env' });

const startServer = async () => {
  const app = express();
  app.use(
    cors(),
    bodyParser.json()
  );
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });  
  
  server.applyMiddleware({ app });
  
  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
  const { connection } = mongoose;
  connection.once('open', () => {
    console.log(`=====================================================`);
    console.log(` | 👉  Mongoose database connection established! 😎 |`);
    console.log(`=====================================================`);
  });
  
  const port = process.env.PORT || 7777;
  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
}

startServer();
