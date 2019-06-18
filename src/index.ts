import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import session from 'express-session';
import connectRedis from 'connect-redis';

import { RegisterResolver } from "./modules/user/Register";
import { redis } from './redis';


const main = async () => {
  await createConnection();
  
  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });
  
  const apolloServer = new ApolloServer({ 
    schema, 
  });
  
  const app = express();
  
  const RedisStore = connectRedis(session)
  // Session Middleware / Alwys before applyMiddleware
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "hgfsagfsghfsah41341",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 + 365 // 7 years
      },
    }  )
  )

  apolloServer.applyMiddleware({ app });

  const port = 4000

  app.listen(4000, () => {
    console.log(`server started on http://localhost:${port}/graphql`);
  });
};

main();