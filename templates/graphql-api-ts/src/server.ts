// src/server.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
